import { Request, Response } from 'express'
import { SkillModel } from '../models/skill.model'
import { createData, deleteDataById, findData, updateDataById} from './crud.controller'

export const getSkills = (res: Response) => {
  return findData(SkillModel, res)
}

export const postSkill = (req: Request, res: Response) => {
  return createData(req.body, SkillModel, res)
}

export const updateSkillById = (req: Request, res: Response) => {
  const { id } = req.params

  return updateDataById(id, req.body, SkillModel, res)
}

export const deleteSkillById = (req: Request, res: Response) => {
  const { id } = req.params

  return deleteDataById(id, SkillModel, res)
}