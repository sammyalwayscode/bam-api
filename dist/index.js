"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing modules
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const newsRouter_1 = __importDefault(require("./router/newsRouter"));
const cors_1 = __importDefault(require("cors"));
//creaing my port
const port = 2099;
//application
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
//linking my database to my server
(0, database_1.dbConfig)();
//routes
app.use("/api", newsRouter_1.default);
//default get
app.get("/", (req, res) => {
    try {
        return res.status(200).json({ message: "Server is running" });
    }
    catch (error) {
        return res.status(404).json({ message: "Error occured" });
    }
});
//listening to port
app.listen(port, () => {
    console.log("listening on port", port);
});
