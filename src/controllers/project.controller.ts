import { Request, Response } from 'express'
import { ProjectModel } from '../models/project.model'
import { createData, findData, updateDataById, deleteDataById, findDataById } from './crud.controller'

export const getProjects = async (res: Response) => {
  return findData(ProjectModel, res)
}

export const getProjectById = async (req: Request, res: Response) => {
  const { id } = req.params

  return findDataById(id, ProjectModel, res)
}

export const postProject = (req: Request, res: Response) => {
  return createData(req.body, ProjectModel, res)
}

export const deleteProjectById = (req: Request, res: Response) => {
  const { id } = req.params

  return deleteDataById(id, ProjectModel, res)
}

export const updateProjectById = (req: Request, res: Response) => {
  const { id } = req.params

  return updateDataById(id, req.body, ProjectModel, res) 
}