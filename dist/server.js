"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = require("./Routes");
const app = (0, express_1.default)();
app.get('/', Routes_1.CreateCourse);
app.listen('3333', () => {
    console.log('server is run');
});
