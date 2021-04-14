"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoutes = express_1.Router(); //gurdo todos los metodos de routs en una constante.
userRoutes.get('/prueba', (req, res) => {
    res.json({
        estado: "success",
        mensaje: "ok"
    });
});
exports.default = userRoutes;
