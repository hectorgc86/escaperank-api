"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var fs_1 = require("fs");
var PATH_ROUTER = "".concat(__dirname);
var router = (0, express_1.Router)();
exports.router = router;
var cleanFileName = function (fileName) {
    var file = fileName.split(".").shift();
    return file;
};
(0, fs_1.readdirSync)(PATH_ROUTER).filter(function (fileName) {
    var _a;
    var cleanName = cleanFileName(fileName);
    if (cleanName !== "index") {
        (_a = "./".concat(cleanName), Promise.resolve().then(function () { return require(_a); })).then(function (moduleRouter) {
            //console.log(`Se esta cargando la ruta.... /${cleanName}`);
            router.use("/".concat(cleanName), moduleRouter.router);
        });
    }
});
