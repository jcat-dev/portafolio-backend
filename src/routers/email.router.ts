import { Router } from 'express'
import { postEmail } from '../controllers/email.controller'
import { validateEmail } from '../middleware/email.middleware'

export const emailRouter = Router()

emailRouter.post('/', validateEmail, postEmail)