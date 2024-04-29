/* eslint-disable no-undef */
import 'dotenv/config'
import { describe, it, expect, beforeAll } from 'vitest'
import { setFetch } from '../utils/fetch'
const PROFILE_API = process.env.API + 'profile/'
const AUTH_API = process.env.API + 'auth'
const newProfileEmpty = {
  title: '',
  stackTitle: '',
  description: '',
  fullName: ''
}

describe('api/profile', () => {
  let profile
  let status

  beforeAll(async () => {
    const response = await fetch(PROFILE_API)
    status = response.status
    const { data } = await response.json()
    const {_id, ...newProfile} = data[0]
    profile = {...newProfile, description: 'Nueva Descripción'}
  })

  describe('GET', () => {
    it('Status 200 | get profiles', () => {
      expect(status).toBe(200)
    })
  })

  describe('POST', () => {
    let token

    beforeAll(async () => {
      const authResponse = await setFetch(AUTH_API, 'POST', { credential: String(process.env.CREDENTIAL) })
      const authData = await authResponse.json()
      token = authData.data.token  
    })

    it('Status 204 | add new profile', async () => {
      const response = await setFetch(PROFILE_API, 'POST', profile, token) 
      expect(response.status).toBe(204)
    })

    it('Status 400 | add new profile empty', async () => {
      const response = await setFetch(PROFILE_API, 'POST', newProfileEmpty, token) 
      expect(response.status).toBe(400)
    })
  })
})