"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envalid_1 = require("envalid");
const validateEnv = () => {
    (0, envalid_1.cleanEnv)(process.env, {
        NODE_ENV: (0, envalid_1.str)(),
        PORT: (0, envalid_1.port)({ default: 3000 }),
        JWT_SECRET: (0, envalid_1.str)(),
    });
};
exports.default = validateEnv;
//# sourceMappingURL=validateEnv.js.map