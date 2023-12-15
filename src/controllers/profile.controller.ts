import { Request, Response } from 'express'
import { findData, findDataById, replaceFirstData, updateDataById } from './crud.controller'
import { ProfileModel } from '../models/profile.model'

export const getProfiles = (res: Response) => {
  return findData(ProfileModel, res)
}

export const getProfileById = (req: Request, res: Response) => {
  return findDataById(req.params.id, ProfileModel, res)
}

export const postProfile = (req: Request, res: Response) => {
  return replaceFirstData(res, ProfileModel, req.body)
}

export const putProfileById = (req: Request, res: Response) => {
  return updateDataById(req.params.id, req.body, ProfileModel, res)
}