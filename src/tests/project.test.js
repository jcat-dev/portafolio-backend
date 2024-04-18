/* eslint-disable no-undef */
import 'dotenv/config'
import { describe, it, expect, beforeAll } from 'vitest'
import { setFetch } from '../utils/fetch'
const PROJECT_API = process.env.API + 'project/'
const AUTH_API = process.env.API + 'auth'
const ID_FAKE = '661d802004342b9017bf1234'
const newProject = {
  projectTitle: 'projectTitle',
  stackTitle: 'stackTitle',
  stackType: [{
    title: 'title',
    skills: ['skills']
  }],
  repositoryURL: 'https://',
  pageURL: 'https://',
  pageImgURL: 'https://',
  description: 'description'
}

const newProjectEmpty = {
  projectTitle: 'projectTitle',
  stackTitle: 'stackTitle',
  stackType: [{
    title: 'title',
    skills: ['']
  }],
  repositoryURL: 'https://',
  pageURL: 'https://',
  pageImgURL: 'https://',
  description: 'description'
}

describe('/api/project', () => {
  let token
  let idProject
  let project

  beforeAll(async () => {
    //auth
    const authResponse = await setFetch(AUTH_API, 'POST', { credential: String(process.env.CREDENTIAL) })
    const authData = await authResponse.json()
    token = authData.data.token  

    //newProject
    project = await setFetch(PROJECT_API, 'POST', newProject, token)

    //lastProject
    const response = await setFetch(PROJECT_API, 'GET')
    const data = await response.json()
    idProject = data.data[data.data.length - 1]._id
  })
    
  describe('GET', () => {
    it('Status 200 | get projects', async () => {
      const response = await setFetch(PROJECT_API, 'GET')
      expect(response.status).toBe(200)
    })

    it('Status 200 | get project by id', async () => {
      const response = await setFetch(PROJECT_API + idProject, 'GET')
      expect(response.status).toBe(200)
    })

    it('Status 400 | get project by id with error in the id', async () => {
      const response = await setFetch(PROJECT_API + idProject + 'id', 'GET')
      expect(response.status).toBe(400)
    })

    it('Status 400 | get project by id with id fake', async () => {
      const response = await setFetch(PROJECT_API + ID_FAKE, 'GET')
      expect(response.status).toBe(400)
    })
  })

  describe('POST', () => {
    it('Status 201 | add new project', () => {
      expect(project.status).toBe(201)
    })

    it('Status 400 | add new project empty', async () => {
      const response = await setFetch(PROJECT_API, 'POST', newProjectEmpty, token)  
      expect(response.status).toBe(400)
    })
  })

  describe('PUT', () => {
    it('Status 204 | update project by id', async () => {
      const response = await setFetch(PROJECT_API + idProject, 'PUT', {...newProject, projectTitle: 'newTitle'}, token)
      expect(response.status).toBe(204)
    })   

    it('Status 400 | update project by id with data empty', async () => {
      const response = await setFetch(PROJECT_API + idProject, 'PUT', newProjectEmpty, token)
      expect(response.status).toBe(400)
    })

    it('Status 400 | update project by id with error in the id', async () => {
      const response = await setFetch(PROJECT_API + idProject + 'id', 'PUT', {...newProject, projectTitle: 'newTitle'}, token)
      expect(response.status).toBe(400)
    })

    it('Status 400 | update project by id with id fake', async () => {
      const response = await setFetch(PROJECT_API + ID_FAKE, 'PUT', {...newProject, projectTitle: 'newTitle'}, token)
      expect(response.status).toBe(400)
    })
  })

  describe('DELETE', () => {
    it('Status 400 | delete project by id with error in the id', async () => {
      const response = await setFetch(PROJECT_API + idProject + 'id', 'DELETE', undefined, token)
      expect(response.status).toBe(400)
    })

    it('Status 400 | delete project by id with id fake', async () => {
      const response = await setFetch(PROJECT_API + ID_FAKE, 'DELETE', undefined, token)
      expect(response.status).toBe(400)
    })

    it('Status 204 | delete skill by id', async () => {
      const response = await setFetch(PROJECT_API + idProject, 'DELETE', undefined, token)
      expect(response.status).toBe(204)
    })
  })
})