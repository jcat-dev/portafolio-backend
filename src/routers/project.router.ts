import { Router } from 'express'
import { deleteProjectById, getProjects, postProject, updateProjectById } from '../controllers/project.controller'

export const projectRouter = Router()

projectRouter.get('/', (_, res) => getProjects(res))
projectRouter.post('/', (req, res) => postProject(req, res))
projectRouter.delete('/:id', (req, res) => deleteProjectById(req, res))
projectRouter.put('/:id', (req, res) => updateProjectById(req, res))

