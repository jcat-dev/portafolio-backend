/* eslint-disable no-undef */
import 'dotenv/config'
import { describe, it, expect } from 'vitest'
import { setFetch } from '../utils/fetch'
const AUTH_API = process.env.API + 'auth/'

describe('/api/auth', () => {
  it('POST | status 201 | auth', async () => {
    const response = await setFetch(AUTH_API, 'POST', {credential: process.env.CREDENTIAL})
    expect(response.status).toBe(201)
  }) 

  it('POST | status 400 | auth with error', async () => {
    const response = await setFetch(AUTH_API, 'POST', {credential: ''})
    expect(response.status).toBe(400)
  }) 
})