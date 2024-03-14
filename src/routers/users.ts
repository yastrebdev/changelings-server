import express from 'express'
import users from '@controllers/users'

const { register } = users

const router = express.Router()

router.post('/register', register)

export default router