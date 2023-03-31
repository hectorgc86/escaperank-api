"use strict";
exports.__esModule = true;
require("dotenv/config");
var express_1 = require("express");
var cors_1 = require("cors");
var routes_1 = require("./routes");
var db_1 = require("./config/db");
var PORT = process.env.PORT || 3001;
var BASE_PATH = process.env.BASE_PATH;
var app = (0, express_1["default"])();
//anyadir rutas de origen en cors
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(BASE_PATH, routes_1.router);
(0, db_1.dbConnectMySql)();
app.listen(PORT, function () { return console.log("Servicio iniciado en puerto ".concat(PORT)); });
