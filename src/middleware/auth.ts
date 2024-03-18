import type { Response, NextFunction } from 'express'
import type { Secret, JwtPayload } from 'jsonwebtoken'
import type { RequestType } from '../types/RecResTypes'
import { prisma } from '../../prisma/prisma-client'
import jwt from 'jsonwebtoken'

export const auth = async (
    req: RequestType,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        let token = req.headers.authorization?.split(' ')[1]

        const decoded = jwt.verify(
            token ? token : '',
            process.env.JWT_SECRET as Secret,
        ) as JwtPayload

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id,
            },
        })

        req.user = user

        next()
    } catch (error) {
        res.status(401).json({ message: 'Не авторизован' })
    }
}
