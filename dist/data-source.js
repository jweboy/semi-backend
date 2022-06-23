"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Menu = _interopRequireDefault(require("./entity/Menu"));

var _Signin = _interopRequireDefault(require("./entity/Signin"));

var _Submenu = _interopRequireDefault(require("./entity/Submenu"));

var _process$env = process.env,
    DATABASE_TYPE = _process$env.DATABASE_TYPE,
    DATABASE_HOST = _process$env.DATABASE_HOST,
    DATABASE_PORT = _process$env.DATABASE_PORT,
    DATABASE_USERNAME = _process$env.DATABASE_USERNAME,
    DATABASE_PASSWORD = _process$env.DATABASE_PASSWORD,
    DATABASE_NAME = _process$env.DATABASE_NAME;
var AppDataSource = new _typeorm.DataSource({
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [_Menu["default"], _Submenu["default"], _Signin["default"]],
  migrations: [],
  subscribers: []
});
exports.AppDataSource = AppDataSource;