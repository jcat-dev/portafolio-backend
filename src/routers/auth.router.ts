import { Router } from 'express'
import { checkCredential } from '../controllers/auth.controller'

export const authRouter = Router()

authRouter.post('/', checkCredential)