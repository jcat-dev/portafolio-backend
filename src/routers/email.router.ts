import { Router } from 'express'
import { postEmail } from '../controllers/email.controller'

export const emailRouter = Router()

emailRouter.post('/', (req, res) => postEmail(req, res))