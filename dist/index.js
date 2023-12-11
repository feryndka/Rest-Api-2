"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const app = (0, express_1.default)();
const PORT = 8800;
app.use("/users", userRouter_1.default);
app.get("/", (req, res) => {
    res.send({
        "Hello": "World"
    });
});
app.post("/", (req, res) => {
    res.send({
        "Hello": "World",
        "Method": "Post"
    });
});
app.put("/random.text", (req, res) => {
    res.send({
        "Random": "Text"
    });
});
app.get("/ab+cd", (req, res) => {
    res.send({
        "ab": "cd",
        "operation": "+"
    });
});
app.get("/ab?cd", (req, res) => {
    res.send({
        "ab": "cd",
        "operation": "?"
    });
});
app.listen(PORT, () => {
    console.log("Application run on port =>", PORT);
});
