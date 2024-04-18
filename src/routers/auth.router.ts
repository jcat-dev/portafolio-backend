import { Router } from 'express'
import { checkCredential } from '../controllers/auth.controller'
import { validateAuth } from '../middleware/auth.middleware'

export const authRouter = Router()

authRouter.post('/', validateAuth, checkCredential)