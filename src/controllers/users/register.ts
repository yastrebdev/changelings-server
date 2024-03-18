import { prisma } from '../../../prisma/prisma-client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

/**
 * @rout POST /api/user/register
 * @desc Регистрация
 * @access Pablic
 */

const register = async (req, res) => {
    try {
        const { email, password, name } = req.body

        if (!email || !password || !name) {
            return res
                .status(400)
                .json({ message: 'Пожалуйста, заполните обязательные поля' })
        }

        const registeredUser = await prisma.user.findFirst({
            where: {
                email,
            },
        })

        if (registeredUser) {
            return res
                .status(400)
                .json({ message: 'Пользователь с таким email уже существует' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                status: 'participant',
            },
        })

        const secret = process.env.JWT_SECRET

        if (user && secret) {
            res.status(201).json({
                id: user.id,
                email: user.email,
                name,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            })
        } else {
            return res
                .status(400)
                .json({ message: 'Не удалось создать пользователя' })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' })
    }
}

export default register