import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

export const checkCredential = (req: Request, res: Response) => {
  const { credential } = req.body 

  if (credential === process.env.CREDENTIAL) {
    const token = sign({role: 'admin'}, String(process.env.PRIVATE_KEY), {expiresIn: '10m'})

    res.status(201).json({data: {token: token}, msg: 'Credencial exitosa'})
  }

  res.statusMessage = '401 Credencial incorrecta'  
  res.status(401).send()
}