import { Schema, model } from 'mongoose'

const skillSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  }
})

export const SkillModel = model('Skill', skillSchema)