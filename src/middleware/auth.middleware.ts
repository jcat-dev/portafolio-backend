import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { authErrorResponse, tokenErrorResponse, validateErrorResponse } from '../utils/httpResponse'
import { Auth } from '../types/Auth'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']
    
    if (!token) {
      res.statusMessage = tokenErrorResponse.msg
      res.status(tokenErrorResponse.status).send()
      return
    }

    verify(token.slice(7), String(process.env.PRIVATE_KEY))
    next()
  } catch (error) {
    if (error instanceof Error) {
      res.statusMessage = error.message
    }

    res.status(authErrorResponse.status).send()
  }
} 

export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.body as Auth

  if (!auth.credential) {
    res.statusMessage = validateErrorResponse.msg
    res.status(validateErrorResponse.status).send()    
    return
  }

  next()
}