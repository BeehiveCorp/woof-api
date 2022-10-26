"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FrequentlyAskedQuestionController_1 = __importDefault(require("./controllers/FrequentlyAskedQuestionController"));
const route = (0, express_1.Router)();
route.get('/frequently-asked-questions', FrequentlyAskedQuestionController_1.default.all);
route.post('/frequently-asked-question', FrequentlyAskedQuestionController_1.default.create);
exports.default = route;
//# sourceMappingURL=routes.js.map