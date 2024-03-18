"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const tslib_1 = require("tslib");
const prisma_client_1 = require("../../prisma/prisma-client");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const auth = async (req, res, next) => {
    try {
        let token = req.headers.authorization?.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token ? token : '', process.env.JWT_SECRET);
        const user = await prisma_client_1.prisma.user.findUnique({
            where: {
                id: decoded.id,
            },
        });
        req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Не авторизован' });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map