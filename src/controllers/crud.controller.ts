import { Response } from 'express'
import { createdResponse, internalServerErrorResponse, noContentResponse, notFoundResponse, okResponse } from '../utils/response'
import { Model } from 'mongoose'

export const createData = async <T>(data: object, model: Model<T>, res: Response) => {
  try {
    await model.create(data)

    res.status(createdResponse.status).json({msg: createdResponse.msg})
  } catch (error) {
    res.status(internalServerErrorResponse.status).json({msg: internalServerErrorResponse.msg})
  }
}

export const findData = async <T>(model: Model<T>, res: Response) => {
  try {
    const data = await model.find({}).exec()

    if (data.length > 0) {
      return res.status(okResponse.status).json({msg: okResponse.msg, data})
    }

    res.status(notFoundResponse.status).json({msg: notFoundResponse.msg})
  } catch (error) {
    res.status(internalServerErrorResponse.status).json({msg: internalServerErrorResponse.msg})
  }
}

export const findDataById = async <T>(id: string, model: Model<T>, res: Response) => {
  try {
    const data = await model.findById(id).exec()

    res.status(okResponse.status).json({msg: okResponse.msg, data})
  } catch (error) {
    res.status(internalServerErrorResponse.status).json({msg: internalServerErrorResponse.msg})
  }
}

export const deleteDataById = async <T>(id: string, model: Model<T>, res: Response) => {
  try {
    await model.findByIdAndDelete(id)

    res.status(noContentResponse).send()
  } catch (error) {
    res.status(internalServerErrorResponse.status).json({msg: internalServerErrorResponse.msg})
  }
}

export const updateDataById = async <T>(id: string, update: object, model: Model<T>, res: Response) => {
  try {
    await model.findByIdAndUpdate(id, update)

    res.status(noContentResponse).send()
  } catch (error) {
    res.status(internalServerErrorResponse.status).json({msg: internalServerErrorResponse.msg})
  }
} 