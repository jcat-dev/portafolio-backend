import mongoose from 'mongoose'

(
  function database() {
    const db = process.env.DATABASE
  
    if (!db) return console.log('database undefined')
  
    mongoose.connect(db)
      .then(() => console.log('DB Connected'))
      .catch(() => console.log('DB error'))
  }
)()