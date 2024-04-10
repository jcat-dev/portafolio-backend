import { Router } from 'express'
import { getProfiles, postProfile } from '../controllers/profile.controller'
import { verifyToken } from '../middleware/auth.middleware'

export const profileRouter = Router()

profileRouter.get('/' , (_, res) => getProfiles(res))
profileRouter.post('/' , verifyToken, postProfile)
