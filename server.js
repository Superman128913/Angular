"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderModuleFactory = exports.renderModule = exports.app = void 0;
/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
require("@angular/localize/init");
require("zone.js/node");
// Refrence Error localStorage Not found  solution
require("localstorage-polyfill");
var core_1 = require("@angular/core");
var express_engine_1 = require("@nguniversal/express-engine");
var express = require("express");
var path_1 = require("path");
var main_server_1 = require("./src/main.server");
var common_1 = require("@angular/common");
var fs_1 = require("fs");
var module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
// Refrence Error Event Not Found Solution
global.Event = null;
// Refrence Error Window Not found  solution
var domino = require('domino');
var fs = require('fs');
var path = require('path');
var template = fs.readFileSync(path.join(__dirname, '../', '', 'browser/index.html')).toString();
var win = domino.createWindow(template);
global.window = win;
global.document = win.document;
global.navigator = win.navigator;
global.localStorage = localStorage;
var cors = require('cors');
// Faster server renders w/ Prod mode (dev mode never needed)
(0, core_1.enableProdMode)();
// The Express app is exported so that it can be used by serverless Functions.
function app() {
    var server = express();
    server.use(cors());
    var distFolder = (0, path_1.join)(process.cwd(), 'dist/aeroplicity/browser');
    var indexHtml = (0, fs_1.existsSync)((0, path_1.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
    var LAZY_MODULE_MAP = require('./src/main.server');
    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    server.engine('html', (0, express_engine_1.ngExpressEngine)({
        bootstrap: main_server_1.AppServerModule,
        providers: [
            (0, module_map_ngfactory_loader_1.provideModuleMap)(LAZY_MODULE_MAP)
        ]
    }));
    server.set('view engine', 'html');
    server.set('views', distFolder);
    // Example Express Rest API endpoints
    // app.get('/api/**', (req, res) => { });
    // Serve pages files from /browser
    server.get('*.*', express.static(distFolder, {
        maxAge: '1y'
    }));
    // All regular routes use the Universal engine
    server.get('*', function (req, res) {
        res.render(indexHtml, {
            req: req,
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: req.baseUrl
                }]
        });
    });
    return server;
}
exports.app = app;
function run() {
    var port = process.env.PORT || 4000;
    // Start up the Node server
    var server = app();
    server.listen(port, function () {
        console.log("Node Express server listening on http://localhost:" + port);
    });
}
var mainModule = __non_webpack_require__.main;
var moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
    run();
}
__exportStar(require("./src/main.server"), exports);
var platform_server_1 = require("@angular/platform-server");
Object.defineProperty(exports, "renderModule", { enumerable: true, get: function () { return platform_server_1.renderModule; } });
Object.defineProperty(exports, "renderModuleFactory", { enumerable: true, get: function () { return platform_server_1.renderModuleFactory; } });
