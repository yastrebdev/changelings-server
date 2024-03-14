import { cleanEnv, port, str } from 'envalid'

const validateEnv = () => {
    cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port({ default: 3000 }),
        JWT_SECRET: str(),
    })
}

export default validateEnv
