import { Router } from 'express'
import { getProfiles, updateProfile } from '../controllers/profile.controller'
import { verifyToken } from '../middleware/auth.middleware'
import { validateProfile } from '../middleware/profile.middleware'

export const profileRouter = Router()

profileRouter.get('/' , (_, res) => getProfiles(res))
profileRouter.put('/' , verifyToken, validateProfile, updateProfile)
