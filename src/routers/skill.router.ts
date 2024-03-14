import { Router } from 'express'
import { deleteSkillById, getSkillByID, getSkills, postSkill, updateSkillById } from '../controllers/skill.controller'

export const skillRouter = Router()

skillRouter.get('/', (_, res) => getSkills(res))
skillRouter.get('/:id', (req, res) => getSkillByID(req, res))
skillRouter.post('/', (req, res) => postSkill(req, res))
skillRouter.delete('/:id', (req, res) => deleteSkillById(req, res))
skillRouter.put('/:id', (req, res) => updateSkillById(req, res))