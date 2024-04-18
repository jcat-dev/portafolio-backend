/* eslint-disable no-undef */
import 'dotenv/config'
import { describe, it, expect, beforeAll } from 'vitest'
import { setFetch } from '../utils/fetch'
const SKILL_API = process.env.API + 'skill/'
const AUTH_API = process.env.API + 'auth'
const ID_FAKE = '661d802004342b9017bf1234'

const newSkill = {
  title: 'title',
  skills: ['skills']
}
const newSkillEmpty = {
  title: '',
  skills: []
} 

describe('api/skill', () => {
  let idSkill
  let token
  let postResponse
  let getResponse

  beforeAll(async () => {
    //auth
    const authResponse = await setFetch(AUTH_API, 'POST', { credential: String(process.env.CREDENTIAL) })
    const authData = await authResponse.json()
    token = authData.data.token

    //add skill
    postResponse = await setFetch(SKILL_API, 'POST', newSkill, token) 

    // get id
    getResponse = await fetch(SKILL_API)
    const skillData = await getResponse.json()
    idSkill = skillData.data[skillData.data.length - 1]._id
  })

  describe('POST', () => {  
    it('Status 201 | add new skill', () => {
      expect(postResponse.status).toBe(201)
    })

    it('Status 400 | add new skill empty', async () => {
      const response = await setFetch(SKILL_API, 'POST', newSkillEmpty, token)  
      expect(response.status).toBe(400)
    })
  })

  describe('GET', () => {
    it('Status 200 | get skills', () => {
      expect(getResponse.status).toBe(200)
    })

    it('Status 200 | get skill by id', async () => {
      const response = await setFetch(SKILL_API + idSkill, 'GET')
      expect(response.status).toBe(200)
    })

    it('Status 400 | get skill by id with error in the id', async () => {
      const response = await setFetch(SKILL_API + idSkill + 'id', 'GET')
      expect(response.status).toBe(400)
    })

    it('Status 400 | get skill by id with id fake', async () => {
      const response = await setFetch(SKILL_API + ID_FAKE, 'GET')
      expect(response.status).toBe(400)
    })
  })

  describe('PUT', () => {
    it('Status 204 | update skill by id', async () => {
      const response = await setFetch(SKILL_API + idSkill, 'PUT', {...newSkill, title: 'newTitle'}, token)
      expect(response.status).toBe(204)
    })   

    it('Status 400 | update skill by id with data empty', async () => {
      const response = await setFetch(SKILL_API + idSkill, 'PUT', newSkillEmpty, token)
      expect(response.status).toBe(400)
    })

    it('Status 400 | update skill by id with error in the id', async () => {
      const response = await setFetch(SKILL_API + idSkill + 'id', 'PUT', {...newSkill, title: 'newTitle'}, token)
      expect(response.status).toBe(400)
    })

    it('Status 400 | update skill by id with id fake', async () => {
      const response = await setFetch(SKILL_API + ID_FAKE, 'PUT', {...newSkill, title: 'newTitle'}, token)
      expect(response.status).toBe(400)
    })
  }) 

  describe('DELETE', () => {
    it('Status 400 | delete skill by id with error in the id', async () => {
      const response = await setFetch(SKILL_API + idSkill + 'id', 'DELETE', undefined, token)
      expect(response.status).toBe(400)
    })

    it('Status 400 | delete skill by id with id fake', async () => {
      const response = await setFetch(SKILL_API + ID_FAKE, 'DELETE', undefined, token)
      expect(response.status).toBe(400)
    })

    it('Status 204 | delete skill by id', async () => {
      const response = await setFetch(SKILL_API + idSkill, 'DELETE', undefined, token)
      expect(response.status).toBe(204)
    })
  })
})