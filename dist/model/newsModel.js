"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const newsSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
    },
    reporterName: {
        type: String,
    },
    newsImage: {
        type: String,
    },
    details: {
        type: String,
    },
}, { timestamps: true });
const bookModel = mongoose_1.default.model("Books", newsSchema);
exports.default = bookModel;
