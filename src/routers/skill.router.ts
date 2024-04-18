import { Router } from 'express'
import { deleteSkillById, getSkillByID, getSkills, postSkill, updateSkillById } from '../controllers/skill.controller'
import { verifyToken } from '../middleware/auth.middleware'
import { formatSkill, validateSkill } from '../middleware/skill.middleware'

export const skillRouter = Router()

skillRouter.get('/', (_, res) => getSkills(res))
skillRouter.get('/:id', (req, res) => getSkillByID(req, res))
skillRouter.post('/', verifyToken, validateSkill, formatSkill, postSkill)
skillRouter.delete('/:id', verifyToken, deleteSkillById)
skillRouter.put('/:id', verifyToken, validateSkill, formatSkill, updateSkillById)