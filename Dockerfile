# 📁 ntc-website/Dockerfile (CORRIGÉ)
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install Yarn
RUN corepack enable yarn

# Copy package files
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Install Yarn
RUN corepack enable yarn

# 🔑 AJOUT : Déclarer les variables comme ARG pour le build
ARG TARGET_EMAIL
ARG RESEND_API_KEY
ARG NEXT_PUBLIC_ADMIN_API_URL
ARG DATABASE_URL
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG JWT_SECRET

# 🔑 AJOUT : Convertir ARG en ENV pour Next.js
ENV TARGET_EMAIL=$TARGET_EMAIL
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV NEXT_PUBLIC_ADMIN_API_URL=$NEXT_PUBLIC_ADMIN_API_URL
ENV DATABASE_URL=$DATABASE_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV JWT_SECRET=$JWT_SECRET

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 🔑 AJOUT : Debug - vérifier que les variables sont disponibles au build
RUN echo "Build-time env check:"
RUN echo "TARGET_EMAIL: $TARGET_EMAIL"
RUN echo "RESEND_API_KEY: $RESEND_API_KEY"

# Build the application avec les variables disponibles
RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]