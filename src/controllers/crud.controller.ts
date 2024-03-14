import { Response } from 'express'
import { successResponse, createdResponse, updatedResponse, deletedResponse, serverErrorResponse } from '../utils/httpResponse'
import { Model } from 'mongoose'

export const createData = async <T>(data: object, model: Model<T>, res: Response) => {
  try {
    await model.create(data)
    res.status(createdResponse.status).json({msg: createdResponse.msg})

  } catch (error) {
    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}

export const findData = async <T>(model: Model<T>, res: Response) => {
  try {
    const data = await model.find({}).exec()
    res.status(successResponse.status).json({msg: successResponse.msg, data})

  } catch (error) {
    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}

export const findDataById = async <T>(id: string, model: Model<T>, res: Response) => {
  try {
    const data = await model.findById(id).exec()
    res.status(successResponse.status).json({msg: successResponse.msg, data})

  } catch (error) {
    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}

export const deleteDataById = async <T>(id: string, model: Model<T>, res: Response) => {
  try {
    await model.findByIdAndDelete(id)
    res.statusMessage = deletedResponse.msg
    res.status(deletedResponse.status).send()

  } catch (error) {
    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}

export const updateDataById = async <T>(id: string, update: object, model: Model<T>, res: Response) => {
  try {
    await model.findByIdAndUpdate(id, update)
    res.statusMessage = updatedResponse.msg
    res.status(updatedResponse.status).send()

  } catch (error) {
    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
} 

export const replaceFirstData = async <T>(res: Response, model: Model<T>, data: object) => {
  try {
    await model.replaceOne({}, data, { upsert: true })
    res.statusMessage = updatedResponse.msg
    res.status(updatedResponse.status).send()

  } catch (error) {
    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}