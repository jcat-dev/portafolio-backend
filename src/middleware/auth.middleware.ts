import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { authErrorResponse, tokenErrorResponse, validateErrorResponse } from '../utils/httpResponse'
import { Auth } from '../types/Auth'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']
    
    if (!token) {
      res.status(tokenErrorResponse.status).send(tokenErrorResponse.msg)
      return
    }

    verify(token.slice(7), String(process.env.PRIVATE_KEY))
    next()
  } catch (error) {
    let msg

    if (error instanceof Error) {
      msg = error.message
    }

    res.status(authErrorResponse.status).send(msg)
  }
} 

export const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const auth = req.body as Auth

  if (!auth.credential) {
    res.status(validateErrorResponse.status).send(validateErrorResponse.msg)    
    return
  }

  next()
}