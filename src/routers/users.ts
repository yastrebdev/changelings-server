import express from 'express'
import users from '@controllers/users'
import { auth } from '@middleware/auth'

const { register, login, current } = users

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.get('/current', auth, current)

export default router
