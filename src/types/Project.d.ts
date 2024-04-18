import { Skill } from './Skill'

export interface Project {
  projectTitle: string
  stackTitle: string
  stackType: Skill[]
  repositoryURL: string
  pageURL: string
  pageImgURL: string
  description: string
}