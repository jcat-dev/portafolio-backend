import { Response } from '../types/Response'

const setResponse = (status: number, msg: string) => {
  return {
    status,
    msg
  }
}

export const successResponse: Response = setResponse(200, 'Solicitud exitosa')
export const createdResponse: Response = setResponse(201, 'El recurso se ha creado exitosamente')
export const updatedResponse: Response = setResponse(204, 'Actualización exitosa')
export const deletedResponse: Response = setResponse(204, 'Eliminación exitosa')
export const notFoundResponse: Response = setResponse(404,'El recurso no fue encontrado' ) 
export const serverErrorResponse: Response = setResponse(500, 'Oops, algo salió mal. Por favor, inténtalo de nuevo') 
