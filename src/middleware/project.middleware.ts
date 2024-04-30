import { NextFunction, Request, Response } from 'express'
import { Project } from '../types/Project'
import { validateErrorResponse } from '../utils/httpResponse'
import { validateURL } from '../utils/validateURL'

export const validateProject = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      description,
      pageImgURL,
      pageURL,
      projectTitle,
      repositoryURL,
      stackTitle,
      stackType
    } = req.body as Project
    const noEmptly = stackType.every((value) => value.title && (value.skills.length > 0) && !value.skills.includes(''))

    if (!description || !projectTitle || !stackTitle) throw Error
    if (!validateURL(pageImgURL) || !validateURL(pageURL) || !validateURL(repositoryURL)) throw Error
    if (!noEmptly) throw Error

    next()
  } catch (error) {
    res.status(validateErrorResponse.status).send(validateErrorResponse.msg)
  }  
}