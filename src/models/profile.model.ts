import { Schema, model } from 'mongoose'

const profileSchema = new Schema({
  stackTitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  }
})

export const ProfileModel = model('Profile' ,profileSchema)