import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import validateEnv from '@utils/validateEnv'
import router from './routes/users'

dotenv.config()

validateEnv()

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use('/api/user', router)

export default app
