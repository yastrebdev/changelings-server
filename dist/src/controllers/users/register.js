"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const prisma_client_1 = require("../../../prisma/prisma-client");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
/**
 * @rout POST /api/user/register
 * @desc Регистрация
 * @access Pablic
 */
const register = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            return res
                .status(400)
                .json({ message: 'Пожалуйста, заполните обязательные поля' });
        }
        const registeredUser = await prisma_client_1.prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (registeredUser) {
            return res
                .status(400)
                .json({ message: 'Пользователь с таким email уже существует' });
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(password, salt);
        const user = await prisma_client_1.prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });
        const secret = process.env.JWT_SECRET;
        if (user && secret) {
            res.status(201).json({
                id: user.id,
                email: user.email,
                name,
                token: jsonwebtoken_1.default.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            });
        }
        else {
            return res
                .status(400)
                .json({ message: 'Не удалось создать пользователя' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' });
    }
};
exports.default = register;
//# sourceMappingURL=register.js.map