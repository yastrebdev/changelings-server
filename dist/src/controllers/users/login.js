"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const prisma_client_1 = require("../../../prisma/prisma-client");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
/**
 * @route POST /api/user/login
 * @desc Логин
 * @access Pablic
 */
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Пожалуйста, заполните обязательные поля' });
        }
        const user = await prisma_client_1.prisma.user.findFirst({
            where: {
                email,
            },
        });
        const isPasswordCorrect = user && (await bcrypt_1.default.compare(password, user.password));
        const secret = process.env.JWT_SECRET;
        if (user && isPasswordCorrect && secret) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: jsonwebtoken_1.default.sign({ id: user.id }, secret, { expiresIn: '30d' }),
            });
        }
        else {
            return res
                .status(400)
                .json({ message: 'Не верно введён логин или пароль' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Что-то пошло не так' });
    }
};
exports.default = login;
//# sourceMappingURL=login.js.map