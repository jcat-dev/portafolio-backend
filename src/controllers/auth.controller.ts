import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { failureAuthResponse, successAuthResponse } from '../utils/httpResponse'

export const checkCredential = (req: Request, res: Response) => {
  const { credential } = req.body 

  if (credential === process.env.CREDENTIAL) {
    const token = sign({role: 'admin'}, String(process.env.PRIVATE_KEY), {expiresIn: '10m'})

    res.status(successAuthResponse.status).json({data: {token: token}, msg: successAuthResponse.msg})
  }

  res.statusMessage = failureAuthResponse.msg
  res.status(failureAuthResponse.status).send()
}