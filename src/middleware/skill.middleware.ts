import { NextFunction, Request, Response } from 'express'
import { validateErrorResponse } from '../utils/httpResponse'
import { Skill } from '../types/Skill'

export const validateSkill = (req: Request, res: Response, next: NextFunction) => {
  const skill = req.body as Skill

  if (!skill.title || skill.skills.length <= 0) {
    res.statusMessage = validateErrorResponse.msg
    res.status(validateErrorResponse.status).send()
    return
  }
  
  next()
}

export const formatSkill = (req: Request, res: Response, next: NextFunction) => {
  const skill = req.body as Skill
  skill.title = skill.title.toUpperCase()
  skill.skills = skill.skills.map((value) => value.toLowerCase())
  next()
}