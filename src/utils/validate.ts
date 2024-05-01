/**
 * true if url is correct
 * @param url 
 * @returns boolean
 */
export const validateURL = (url: string) => {
  return url.startsWith('https://') || url.startsWith('http://')
}