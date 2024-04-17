type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const setFetch = (api: string, method: Method, body?: object, token?: string) => {
  return fetch(api, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
}