import { Response } from '../types/Response'

const getResponse = (status: number, msg: string) => {
  return {
    status,
    msg
  }
}

export const okResponse: Response = getResponse(200, 'Solicitud exitosa')
export const createdResponse: Response = getResponse(201, 'El recurso se ha creado exitosamente')
export const noContentResponse = 204
export const notFoundResponse: Response = getResponse(404,'El recurso no fue encontrado' ) 
export const internalServerErrorResponse: Response = getResponse(500, 'Error en el servidor') 
