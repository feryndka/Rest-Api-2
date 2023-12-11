"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const app = (0, express_1.default)();
const PORT = 8800;
app.use((0, cookie_parser_1.default)());
app.use("/users", userRouter_1.default);
//Middleware dalam express
app.use((req, res, next) => {
    const err = false;
    if (err) {
        res.status(500).send({
            message: "Server Error",
        });
    }
    else {
        console.log(" Running on general routers");
        next();
    }
});
app.get("/", (req, res) => {
    // console.log("Signed cookies =>", res.sign)
    res.send({
        Hello: "World",
    });
});
app.post("/", (req, res) => {
    res.send({
        Hello: "World",
        Method: "Post",
    });
});
app.put("/random.text", (req, res) => {
    res.send({
        Random: "Text",
    });
});
app.get("/ab+cd", (req, res) => {
    res.send({
        ab: "cd",
        operation: "+",
    });
});
app.get("/ab?cd", (req, res) => {
    res.send({
        ab: "cd",
        operation: "?",
    });
});
app.listen(PORT, () => {
    console.log("Application run on port :", PORT);
});
