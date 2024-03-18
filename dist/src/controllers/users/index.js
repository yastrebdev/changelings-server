"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const register_1 = tslib_1.__importDefault(require("./register"));
const login_1 = tslib_1.__importDefault(require("./login"));
const current_1 = tslib_1.__importDefault(require("./current"));
const users = {
    register: register_1.default,
    login: login_1.default,
    current: current_1.default
};
exports.default = users;
//# sourceMappingURL=index.js.map