import { Request, Response } from 'express'
import { ContactForm } from '../types/ContactForm'
import { internalServerErrorResponse, noContentResponse } from '../utils/response'
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
      from: `${name} ${email}`,
      to: process.env.EMAIL_USER,
      subject: 'Nuevo correo del portafolio', 
      text: `${text} ${email}`, 
    })

    res.status(noContentResponse).send()
  } catch (error) {
    res.status(internalServerErrorResponse.status).json({msg: internalServerErrorResponse.msg})
  }
}

export {
  postEmail
}