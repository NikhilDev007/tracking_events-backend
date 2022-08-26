"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const app_entity_1 = require("../app.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Tiger123@',
    database: 'subgraphDataManagement',
    entities: [app_entity_1.CRED],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map