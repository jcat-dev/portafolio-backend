import { Router } from 'express'
import { postEmail } from '../controllers/email.controller'

const emailRouter = Router()

emailRouter.post('/email', (req, res) => postEmail(req, res))

export default emailRouter