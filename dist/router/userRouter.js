"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//Root Params and Multi Function
router.get("/:username", (req, res, next) => {
    console.log("Handler");
    next();
}, (req, res, next) => {
    console.log("Handler 2");
    next();
}, (req, res) => {
    const { username } = req.params;
    res.send({
        profile: [{
                name: username,
                age: 20
            }]
    });
});
router.put("/", (req, res) => {
    res.send({
        users: []
    });
});
router.get("/([/$])clown", (req, res) => {
    res.send({
        users: [{
                "clown": "service"
            }]
    });
});
exports.default = router;
