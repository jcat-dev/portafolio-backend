import { NextFunction, Request, Response } from 'express'
import { Profile } from '../types/Profile'
import { validateErrorResponse } from '../utils/httpResponse'

export const validateProfile = (req: Request, res: Response, next: NextFunction) => {
  const profile = req.body as Profile
  const isUrl = profile.photoUrl.startsWith('https://') || profile.photoUrl.startsWith('http://')
  
  if (!profile.description || !profile.fullName || !profile.photoUrl || !profile.stackTitle || !isUrl) {
    res.statusMessage = validateErrorResponse.msg
    res.status(validateErrorResponse.status).send()    
    return
  }

  next()
}