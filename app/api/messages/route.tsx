import { NextResponse } from "next/server";

export async function GET() {
  const fakeMessages = [
    {
      id: "msg001",
      firstName: "Johan",
      lastName: "Nguyen",
      email: "johan@example.com",
      date: "2025-05-29T12:00:00Z",
      message: "Bonjour, je suis intéressé par vos activités et j'aimerais en savoir plus sur les unités proches de chez moi."
    },
    {
      id: "msg002",
      firstName: "Emily",
      lastName: "Smith",
      email: "emily.smith@domain.com",
      date: "2025-05-28T14:45:00Z",
      message: "Bonjour, j'ai vu une présentation dans mon lycée et je voudrais m'inscrire. Merci !"
    },
    {
      id: "msg003",
      firstName: "Liam",
      lastName: "Brown",
      email: "liam.brown@mail.com",
      date: "2025-05-27T09:15:00Z",
      message: "Je suis parent d'un jeune intéressé par votre programme. Quels sont les horaires ?"
    }
  ];

  return NextResponse.json(fakeMessages);
}
