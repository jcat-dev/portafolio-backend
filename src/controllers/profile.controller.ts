import { Request, Response } from 'express'
import { findData, replaceFirstData } from './crud.controller'
import { ProfileModel } from '../models/profile.model'

export const getProfiles = (res: Response) => {
  return findData(ProfileModel, res)
}

export const postProfile = (req: Request, res: Response) => {
  return replaceFirstData(res, ProfileModel, req.body)
}