import type { Request } from 'express'
import type { User } from './UserTypes'

export interface RequestType extends Request {
    user: User | null
}
