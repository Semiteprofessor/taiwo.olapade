import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const name = formData.get("name");
  const email = formData.get("email");

  if (!message) {
    return {
      error: "Invalid Message",
    };
  }

  try {
    await resend.emails.send({
      from: "Contact From <onboarding@resend.dev>",
      to: "semiteprofessor@gmail.com",
      subject: `${name} From Contact Form`,
      replyTo: email?.toString(),
      text: `Sender email: ${email}\nMessage: ${message}`,
    });

    redirect("/");
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: "Failed to send email. Please try again later.",
    };
  }
};
