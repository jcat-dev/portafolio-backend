import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { failureAuthResponse } from '../utils/httpResponse'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers['authorization']
    
    if (!token) {
      res.status(failureAuthResponse.status).send()
      return
    }

    verify(token.slice(7), String(process.env.PRIVATE_KEY))
    next()
  } catch (error) {
    if (error instanceof Error) {
      res.statusMessage = error.message
    }

    res.status(failureAuthResponse.status).send()
  }
} 