import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { SendEmail } from "./SendEMail";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";

const ContactForm = () => {
  return (
    <Card>
      <form
        action={async (FormData) => {
          "use server";
          await SendEMail(FormData);
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">Send me a mail.</CardTitle>
          <CardDescription>
            Once form is submit you will be redirected to home page
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <div className="grid w-full max-w-sm items-center hap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your message</Label>
            <textarea
              placeholder="Your message here ..."
              name="message"
              required
              className="resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id=""
            ></textarea>
          </div>
        </CardHeader>
        <CardFooter>
          <Button type="submit" className="w-full"></Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
