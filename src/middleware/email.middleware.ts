import { NextFunction, Request, Response } from 'express'
import { Email } from '../types/Email'
import { valueErrorResponse, validateErrorResponse } from '../utils/httpResponse'
import { validateEMAIL } from '../utils/validate'

export const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const email = req.body as Email

  if (!email || Object.keys(email).length === 0) {
    res.status(valueErrorResponse.status).send(valueErrorResponse.msg)    
    return
  }

  if (!email.name || !email.text || !email.email || !validateEMAIL(email.email)) {
    res.status(validateErrorResponse.status).send(validateErrorResponse.msg)    
    return
  }

  next()
}