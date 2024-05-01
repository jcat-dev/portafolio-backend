import { NextFunction, Request, Response } from 'express'
import { Project } from '../types/Project'
import { validateErrorResponse, valueErrorResponse } from '../utils/httpResponse'
import { validateURL } from '../utils/validate'

export const validateProject = (req: Request, res: Response, next: NextFunction) => {
  try {      
    const project = req.body as Project

    if (!project || Object.keys(project).length === 0) {
      res.status(valueErrorResponse.status).send(valueErrorResponse.msg)
      return
    }

    if (!project.description || !project.projectTitle || !project.stackTitle) throw Error
    if (!validateURL(project.pageImgURL) || !validateURL(project.pageURL) || !validateURL(project.repositoryURL)) throw Error
    if (project.stackType.length === 0) throw Error

    const noEmptly = project.stackType.every((value) => value.title && (value.skills.length > 0) && !value.skills.includes(''))
    if (!noEmptly) throw Error

    next()
  } catch (error) {
    res.status(validateErrorResponse.status).send(validateErrorResponse.msg)
  }  
}