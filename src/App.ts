import 'dotenv/config'
import './config/database'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
  methods: [ 'GET', 'POST', 'PUT', 'DELETE'],
  origin: process.env.ORIGIN,
  allowedHeaders: [ 'Content-Type' ]
}))

app.use(express.json())

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))