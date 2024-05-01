import { Response } from '../types/Response'

const setResponse = (status: number, msg: string) => {
  return {
    status,
    msg
  }
}

//http method msg
export const successResponse: Response = setResponse(200, 'Solicitud exitosa')
export const createdResponse: Response = setResponse(201, 'Recurso creado exitosamente')
export const updatedResponse: Response = setResponse(200, 'Actualización exitosa')
export const deletedResponse: Response = setResponse(200, 'Eliminación exitosa')
export const idErrorResponse: Response = setResponse(400, 'Error 400. ID incorrecta')
export const idNotFoundResponse: Response = setResponse(400, 'Error 400. ID no encontrado')

//error msg
export const notFoundResponse: Response = setResponse(404,'Error 404. Recurso no encontrado') 
export const serverErrorResponse: Response = setResponse(500, 'Error 500. Por favor, inténtalo de nuevo') 
export const validateErrorResponse: Response = setResponse(400, 'Error 400. Validación incorrecta')
export const valueErrorResponse: Response = setResponse(400, 'Error 400. Cuerpo vacío')

//auth msg
export const successAuthResponse: Response = setResponse(201, 'Credencial exitosa')
export const authErrorResponse: Response = setResponse(401, 'Error 401. Credencial incorrecta')
export const tokenErrorResponse: Response = setResponse(401, 'Error 401. No autorizado')