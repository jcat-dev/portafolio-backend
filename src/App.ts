import 'dotenv/config'
import './config/database'
import express from 'express'
import cors from 'cors'
import { emailRouter } from './routers/email.router'
import { projectRouter } from './routers/project.router'
import { skillRouter } from './routers/skill.router'
import { profileRouter } from './routers/profile.router'

const app = express()

app.use(cors({
  methods: [ 'GET', 'POST', 'PUT', 'DELETE'],
  origin: process.env.ORIGIN,
  allowedHeaders: [ 'Content-Type' ]
}))

app.use(express.json())

app.use('/api/email', emailRouter)
app.use('/api/profile', profileRouter)
app.use('/api/skill', skillRouter)
app.use('/api/project', projectRouter)

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))