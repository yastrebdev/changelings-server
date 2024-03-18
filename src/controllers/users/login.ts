import type { RequestType } from "../../types/RecResTypes"
import type { Response } from "express"
import { prisma } from "../../../prisma/prisma-client"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

/**
 * @route POST /api/user/login
 * @desc Логин
 * @access Pablic
 */


const login = async (req: RequestType, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Пожалуйста, заполните обязательные поля' })
        }

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        })

        const isPasswordCorrect =
            user && (await bcrypt.compare(password, user.password))
        const secret = process.env.JWT_SECRET

        if (user && isPasswordCorrect && secret) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            })
        } else {
            return res
                .status(400)
                .json({ message: 'Не верно введён логин или пароль' })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' })
    }
}

export default login