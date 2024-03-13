"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
//Importing Libraries
require('dotenv').config();
const _1 = tslib_1.__importDefault(require("."));
/*
    ===============================================================
    Importing the port set on the .env, if the port number is not set on .env or the port is being used by another server
    running on the local macchine we are asking the app to use 3000 as the port number
    ===============================================================
*/
const PORT = process.env.PORT || 3000;
//Listing to the app and running it on PORT 5000
_1.default.listen(PORT, async () => {
    console.log(`listning on port ${PORT}`);
});
//# sourceMappingURL=server.js.map