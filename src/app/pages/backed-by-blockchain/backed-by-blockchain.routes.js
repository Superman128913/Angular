"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLOCKCHAIN_ROUTES = void 0;
// Application
var blockchain_component_1 = require("./backed-by-blockchain.component");
exports.BLOCKCHAIN_ROUTES = [
    {
        path: '',
        component: blockchain_component_1.BackedByBlockchainComponent
    }
];
