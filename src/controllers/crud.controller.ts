import { Response } from 'express'
import { successResponse, createdResponse, updatedResponse, deletedResponse, serverErrorResponse, idErrorResponse, idNotFoundResponse } from '../utils/httpResponse'
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
    const result = await model.findById(id).exec()

    if (!result) {
      res.statusMessage = idNotFoundResponse.msg
      res.status(idNotFoundResponse.status).send()
      return
    }

    res.status(successResponse.status).json({msg: successResponse.msg, data: result})
  } catch (error) {
    if (error instanceof Error && error.message.includes('ObjectId')){
      res.statusMessage = idErrorResponse.msg
      res.status(idErrorResponse.status).send()
      return
    }

    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}

export const deleteDataById = async <T>(id: string, model: Model<T>, res: Response) => {
  try {
    const result = await model.findByIdAndDelete(id)

    if (!result) {
      res.statusMessage = idNotFoundResponse.msg
      res.status(idNotFoundResponse.status).send()
      return
    }

    res.statusMessage = deletedResponse.msg
    res.status(deletedResponse.status).send()
  } catch (error) {
    if (error instanceof Error && error.message.includes('ObjectId')){
      res.statusMessage = idErrorResponse.msg
      res.status(idErrorResponse.status).send()
      return
    }

    res.statusMessage = serverErrorResponse.msg
    res.status(serverErrorResponse.status).send()
  }
}

export const updateDataById = async <T>(id: string, update: object, model: Model<T>, res: Response) => {
  try {
    const result = await model.findByIdAndUpdate(id, update)

    if (!result) {
      res.statusMessage = idNotFoundResponse.msg
      res.status(idNotFoundResponse.status).send()
      return
    }

    res.statusMessage = updatedResponse.msg
    res.status(updatedResponse.status).send()
  } catch (error) {
    if (error instanceof Error && error.message.includes('ObjectId')){
      res.statusMessage = idErrorResponse.msg
      res.status(idErrorResponse.status).send()
      return
    }

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