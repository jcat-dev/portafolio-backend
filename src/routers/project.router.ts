import { Router } from 'express'
import { deleteProjectById, getProjectById, getProjects, postProject, updateProjectById } from '../controllers/project.controller'
import { verifyToken } from '../middleware/auth.middleware'

export const projectRouter = Router()

projectRouter.get('/', (_, res) => getProjects(res))
projectRouter.get('/:id', (req, res) => getProjectById(req, res))
projectRouter.post('/', verifyToken, postProject)
projectRouter.delete('/:id', verifyToken, deleteProjectById)
projectRouter.put('/:id', verifyToken, updateProjectById)

