"use client";
import { motion } from "framer-motion";
import { Shield, Heart, Users, Award, Clock, DollarSign, Phone, Mail, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import  TestimonialsSimple  from "@/components/TestimonialsSimple";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ParentsPage() {
  const parentInfo = [
    {
      icon: Shield,
      title: "Safety First",
      description: "All adult volunteers are DBS checked and trained in safeguarding. We maintain the highest standards of child protection.",
      highlights: ["DBS checked volunteers", "Safeguarding training", "Regular safety audits", "Child protection policies"]
    },
    {
      icon: DollarSign,
      title: "Affordable Costs",
      description: "Local units typically charge small weekly subscriptions (usually £1–3/week). Uniforms are often loaned or subsidised.",
      highlights: ["Low weekly fees", "Uniform support", "Equipment provided", "Financial assistance available"]
    },
    {
      icon: Clock,
      title: "Flexible Commitment",
      description: "Cadets typically meet once or twice a week. Camps and parades are optional but highly rewarding experiences.",
      highlights: ["Weekly meetings", "Optional extra activities", "Holiday camps", "Weekend events"]
    },
    {
      icon: Award,
      title: "Skills & Recognition",
      description: "Cadets wear smart naval-style uniforms and earn badges for achievements. We celebrate every milestone.",
      highlights: ["Progressive training", "Achievement badges", "Leadership opportunities", "Personal development"]
    }
  ];

  const volunteerRoles = [
    {
      title: "Unit Instructors",
      description: "Teach specific skills like seamanship, navigation, or drill",
      commitment: "2-3 hours per week",
      requirements: "Enthusiasm and willingness to learn"
    },
    {
      title: "Unit Officers",
      description: "Lead and manage unit operations and cadet development",
      commitment: "4-6 hours per week",
      requirements: "Leadership experience helpful but not essential"
    },
    {
      title: "Administrative Support",
      description: "Help with paperwork, communications, and event planning",
      commitment: "2-4 hours per week",
      requirements: "Good organizational skills"
    },
    {
      title: "Camp Staff",
      description: "Support residential training camps and adventures",
      commitment: "Weekend and holiday periods",
      requirements: "Outdoor activity experience welcomed"
    },
    {
      title: "Specialist Instructors",
      description: "Share professional skills in sailing, music, or technical subjects",
      commitment: "Flexible - as available",
      requirements: "Relevant professional experience"
    }
  ];

  const faqs = [
    {
      question: "What age can my child join?",
      answer: "Children can join from age 7 up to 18. We have different age groups with age-appropriate activities and challenges."
    },
    {
      question: "Do they need to know how to swim?",
      answer: "No swimming experience is required to join. We teach water safety and swimming skills as part of our comprehensive training program."
    },
    {
      question: "What does the uniform cost?",
      answer: "Most units provide uniforms on loan or at subsidised cost. We believe financial constraints shouldn't prevent participation."
    },
    {
      question: "How often do they meet?",
      answer: "Most units meet once or twice per week in the evenings, with additional weekend activities and optional holiday camps."
    },
    {
      question: "Is it just for boys?",
      answer: "Absolutely not! The NTC is fully co-educational and welcomes young people of all genders equally."
    },
    {
      question: "What if my child has special needs?",
      answer: "We're committed to inclusion and will work with families to ensure every young person can participate fully and safely."
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="outline" className="mb-4 text-ntcBlue border-ntcBlue">
          <Heart className="w-4 h-4 mr-2" />
          For Families & Volunteers
        </Badge>
        <h1 className="text-5xl font-bold text-ntcBlue mb-6 bg-gradient-to-r from-ntcBlue to-blue-600 bg-clip-text text-transparent">
          For Parents & Leaders
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Discover how the NTC supports families and creates opportunities for adults to make a difference in young people"s lives.
        </p>
      </motion.div>

      {/* Main Content Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs defaultValue="parents" className="mb-16">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="parents" className="text-lg py-3">
              <Users className="w-5 h-5 mr-2" />
              Information for Parents
            </TabsTrigger>
            <TabsTrigger value="volunteers" className="text-lg py-3">
              <Heart className="w-5 h-5 mr-2" />
              Become a Volunteer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="parents">
            {/* Parent Information Section */}
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Key Information Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {parentInfo.map((info, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-ntcBlue/20">
                      <CardHeader>
                        <div className="w-16 h-16 bg-ntcBlue/10 rounded-2xl flex items-center justify-center mb-4">
                          <info.icon className="w-8 h-8 text-ntcBlue" />
                        </div>
                        <CardTitle className="text-xl text-slate-800">{info.title}</CardTitle>
                        <CardDescription className="text-slate-600 leading-relaxed">
                          {info.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {info.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* What to Expect Section */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-blue-50 to-slate-50 border-2">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800 flex items-center gap-3">
                      <Star className="w-6 h-6 text-ntcBlue" />
                      What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">First Visit</h4>
                        <p className="text-sm text-slate-600">
                          Visit your local unit, meet the officers, and see activities in action. No commitment required.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Trial Period</h4>
                        <p className="text-sm text-slate-600">
                          Most units offer a trial period so your child can experience NTC before making a commitment.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Ongoing Support</h4>
                        <p className="text-sm text-slate-600">
                          Regular communication with officers and opportunities for parent involvement in unit activities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAQ Section */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-slate-800 mb-3">{faq.question}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="volunteers">
            {/* Volunteer Information Section */}
            <motion.div 
              className="space-y-12"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Introduction */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-ntcBlue to-blue-600 text-white border-0">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4">Make a Difference</h2>
                    <p className="text-xl text-blue-100 leading-relaxed">
                      Join our community of dedicated volunteers who are shaping the next generation. 
                      No naval experience required – just enthusiasm, commitment, and a desire to help young people thrive.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Volunteer Roles */}
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                  Volunteer Opportunities
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {volunteerRoles.map((role, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-ntcBlue/20">
                      <CardHeader>
                        <CardTitle className="text-lg text-slate-800">{role.title}</CardTitle>
                        <CardDescription className="text-slate-600">
                          {role.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {role.commitment}
                            </Badge>
                          </div>
                          <p className="text-sm text-slate-600">
                            <strong>Requirements:</strong> {role.requirements}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Requirements & Support */}
              <motion.div variants={fadeInUp}>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-2 border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-800 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Enhanced DBS check (we"ll help arrange this)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Safeguarding training (provided by us)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Commitment to young people"s development
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Willingness to learn and be part of a team
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        What We Provide
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-blue-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Comprehensive training and ongoing support
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Uniform and any specialist equipment needed
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Regular social events and volunteer recognition
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          A rewarding way to give back to your community
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div variants={fadeInUp}>
                <Alert>
                  <Heart className="h-4 w-4" />
                  <AlertDescription className="text-lg">
                    <strong>Ready to get started?</strong> Contact your local unit or reach out to NTC Headquarters 
                    to learn more about volunteering opportunities in your area.
                  </AlertDescription>
                </Alert>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Contact Information */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-slate-50 to-white border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Ready to Get Involved?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Whether you"re a parent with questions or someone interested in volunteering, 
                  we"re here to help. Get in touch with us or your local unit to start the conversation.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-ntcBlue" />
                    <a href="mailto:hq@ntc.org.uk" className="text-ntcBlue hover:underline">
                      hq@ntc.org.uk
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-ntcBlue" />
                    <span className="text-slate-600">+44 (0)1273 123456</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-ntcBlue hover:bg-blue-600" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us Today
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Users className="w-4 h-4 mr-2" />
                  Find Your Local Unit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Testimonials */}
      <TestimonialsSimple />
    </main>
  );
}