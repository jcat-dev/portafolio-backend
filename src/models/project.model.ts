import { Schema, model } from 'mongoose'

const projectSchema = new Schema({
  projectTitle: {
    type: String,
    required: true
  },
  stackTitle: {
    type: String,
    required: true
  },
  stackType: [{
    title: {
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true
    }
  }],
  repositoryURL: {
    type: String,
    required: true
  },
  pageURL: {
    type: String,
    required: true
  },
  pageImgURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})

export const ProjectModel = model('Project', projectSchema)
