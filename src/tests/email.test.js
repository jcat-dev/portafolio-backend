/* eslint-disable no-undef */
import 'dotenv/config'
import { describe, it, expect } from 'vitest'
import { setFetch } from '../utils/fetch'
const EMAIL_API = process.env.API + 'email/'
const email = {
  text: 'text',
  email: 'test@gmail.com1',
  name: 'name'
}
const emailEmpty = {
  text: '',
  email: '',
  name: ''
}


describe('/api/email', () => {
  it('POST | status 201 | send email', async () => {
    const response = await setFetch(EMAIL_API, 'POST', email)
    expect(response.status).toBe(201)
  })

  it('POST | status 400 | send email empty', async () => {
    const response = await setFetch(EMAIL_API, 'POST', emailEmpty)
    expect(response.status).toBe(400)
  })
})