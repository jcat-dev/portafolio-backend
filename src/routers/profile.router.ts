import { Router } from 'express'
import { getProfiles, postProfile } from '../controllers/profile.controller'

export const profileRouter = Router()

profileRouter.get('/' , (_, res) => getProfiles(res))
profileRouter.post('/' , (req, res) => postProfile(req, res))
