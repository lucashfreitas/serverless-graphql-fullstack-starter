"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomId = void 0;
const uuid_1 = require("uuid");
class RandomId {
    static next() {
        return uuid_1.v4();
    }
}
exports.RandomId = RandomId;
