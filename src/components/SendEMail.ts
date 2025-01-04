import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);
export const senEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const name = formData.get("name");
  const sendEmail = formData.get("SendEmail");

  if (!message) {
    return {
      erorr: "Invalid Message",
    };
  }

  await resend.emails.send({
    from: "Contact From <onboarding@resend.dev",
    to: `semiteprofessor@gmsil.com`,
    subject: `${name} From Contact Form`,
    replyTo: `${sendEmail}`,
    text: `send email: ${sendEmail} ${message}`,
  });
  return redirect("/");
};
