"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const users_1 = tslib_1.__importDefault(require("@controllers/users"));
const auth_1 = require("@middleware/auth");
const { register, login, current } = users_1.default;
const router = express_1.default.Router();
router.post('/login', login);
router.post('/register', register);
router.get('/current', auth_1.auth, current);
exports.default = router;
//# sourceMappingURL=users.js.map