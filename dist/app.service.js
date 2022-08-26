"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const cross_fetch_1 = require("cross-fetch");
const app_entity_1 = require("./app.entity");
let AppService = class AppService {
    constructor() {
        this.graphBaseUrl =
            'https://api.studio.thegraph.com/query/9451/event-tracking/0.0.11';
    }
    async findAll() {
        const InfoQuery = {
            query: `
      query {
        userDatas{
          id
          USERNAME
          PASSWORD
      }
      }`
        };
        const InfoData = await (0, cross_fetch_1.default)(this.graphBaseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(InfoQuery),
        })
            .then((res) => res.json())
            .then((resJson) => {
            var _a;
            return (_a = resJson === null || resJson === void 0 ? void 0 : resJson.data) === null || _a === void 0 ? void 0 : _a.userDatas;
        });
        return this.checkArray(InfoData) ? InfoData : [];
    }
    checkArray(array) {
        return Array.isArray(array) && array.length ? true : false;
    }
    async storeData(subgraphData) {
        const { id, Userid, USERNAME, PASSWORD } = subgraphData;
        const info = new app_entity_1.CRED();
        info.id = id;
        info.Userid = Userid;
        info.USERNAME = USERNAME;
        info.PASSWORD = PASSWORD;
        await info.save();
        return info;
    }
    async storeAll() {
        const InfoQuery = {
            query: `
      query {
        userDatas{
          id
          USERNAME
          PASSWORD
      }
      }`
        };
        const InfoData = await (0, cross_fetch_1.default)(this.graphBaseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(InfoQuery),
        })
            .then((res) => res.json())
            .then((resJson) => {
            var _a;
            return (_a = resJson === null || resJson === void 0 ? void 0 : resJson.data) === null || _a === void 0 ? void 0 : _a.userDatas;
        });
        const infoArray = [];
        for (let i = 0; i < InfoData.length; i++) {
            const info = new app_entity_1.CRED();
            info.Userid = InfoData[i].id;
            info.USERNAME = InfoData[i].USERNAME;
            info.PASSWORD = InfoData[i].PASSWORD;
            await info.save();
            infoArray.push(info);
        }
        return infoArray;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map