import { Response } from '../types/Response'

export const okResponse: Response = {
  status: 200,
  msg: 'Solicitud exitosa.'
} 

export const createdResponse: Response = {
  status: 201,
  msg: 'Recurso creado exitosamente.'
} 

export const noContentResponse: Response = {
  status: 204,
  msg: 'Solicitud exitosa.'
} 

export const notFoundResponse: Response = {
  status: 404,
  msg: 'El recurso no fue encontrado.'
} 

export const internalServerErrorResponse: Response = {
  status: 500,
  msg: 'Error en el servidor'
} 