import { Router } from 'express'
import { getProfileById, getProfiles, postProfile, putProfileById } from '../controllers/profile.controller'

export const profileRouter = Router()

profileRouter.get('/' , (_, res) => getProfiles(res))
profileRouter.get('/:id', (req, res) => getProfileById(req, res))
profileRouter.post('/' , (req, res) => postProfile(req, res))
profileRouter.put('/:id' , (req, res) => putProfileById(req, res))
