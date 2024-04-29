import { NextFunction, Request, Response } from 'express'
import { Profile } from '../types/Profile'
import { validateErrorResponse } from '../utils/httpResponse'

export const validateProfile = (req: Request, res: Response, next: NextFunction) => {
  const profile = req.body as Profile
  
  if (!profile.description || !profile.fullName || !profile.stackTitle || !profile.title) {
    res.statusMessage = validateErrorResponse.msg
    res.status(validateErrorResponse.status).send()    
    return
  }

  next()
}