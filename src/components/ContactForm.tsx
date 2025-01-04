import React from 'react'
import { Card } from './ui/card'

const ContactForm = () => {
  return (
    <Card>
      <form action={async(FormData) => {
        "use server";
        await SendEMail
      }}></form>
    </Card>
  )
}

export default ContactForm
