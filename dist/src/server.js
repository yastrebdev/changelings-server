"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
const _1 = tslib_1.__importDefault(require("."));
dotenv.config();
const PORT = process.env.PORT || 3000;
_1.default.listen(PORT, async () => {
    console.log(`listning on port ${PORT}`);
});
//# sourceMappingURL=server.js.map