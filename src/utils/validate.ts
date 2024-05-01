/**
 * true if url is correct
 * @param url 
 * @returns boolean
 */
export const validateURL = (url: string) => {
  return url.startsWith('https://') || url.startsWith('http://')
}

/**
 * true if email is correct
 * @param email 
 * @returns 
 */
export const validateEMAIL = (email: string) => {
  const firstIndex = email.indexOf('@')
  const lastIndex = email.lastIndexOf('@')

  return firstIndex > 0 && lastIndex < (email.length - 1)
}