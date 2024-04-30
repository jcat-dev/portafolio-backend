import { NextFunction, Request, Response } from 'express'
import { Email } from '../types/Email'
import { validateErrorResponse } from '../utils/httpResponse'

export const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const email = req.body as Email
  const firstIndex = email.email.indexOf('@')
  const lastIndex = email.email.lastIndexOf('@')
  const isNotEmail = firstIndex === 0 || lastIndex === (email.email.length - 1)
  
  if (!email.name || !email.text || isNotEmail) {
    res.status(validateErrorResponse.status).send(validateErrorResponse.msg)    
    return
  }

  next()
}