"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseRepository = void 0;
const sqlite_1 = require("sqlite");
const sqlite3_1 = __importDefault(require("sqlite3"));
class DatabaseRepository {
    static async initialize(name) {
        const repository = new DatabaseRepository();
        repository._database = await (0, sqlite_1.open)({ filename: name, driver: sqlite3_1.default.Database });
        await repository._database.exec(`
        CREATE TABLE IF NOT EXISTS POST(
            POST_ID TEXT PRIMARY KEY NOT NULL,
            POST_TEXT TEXT NOT NULL,
            LIKES INT NOT NULL 
        )
        `);
        return repository;
    }
    get database() {
        return this._database;
    }
    async end() {
        await this._database.close();
    }
}
exports.DatabaseRepository = DatabaseRepository;
