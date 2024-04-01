import { Request, Response } from 'express'
import { ContactForm } from '../types/ContactForm'
import { serverErrorResponse } from '../utils/httpResponse'
import nodemailer from 'nodemailer'

const postEmail = async (req: Request, res: Response) => {
  try {
    const {
      text,
      email,
      name
    }: ContactForm = req.body

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    })

    await transporter.sendMail({
      from: `${name} ${process.env.EMAIL_USER}`,
      to: process.env.EMAIL_USER2,
      subject: 'Nuevo correo del portafolio', 
      html: `
        <b>${name}</b>
        <p>${text}</p>
        ${email}
      `,
    })

    res.status(201).json({msg: 'Mensaje enviado exitosamente'})
  } catch (error) {
    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}

export {
  postEmail
}