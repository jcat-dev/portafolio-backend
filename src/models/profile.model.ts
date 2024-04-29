import { Schema, model } from 'mongoose'

const profileSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  stackTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  }
})

export const ProfileModel = model('Profile' ,profileSchema)