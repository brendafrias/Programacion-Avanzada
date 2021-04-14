"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
//Conexion dataBase MySQL
const connection = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "appCurso_mar_vie",
    port: 3306
});
//Conectar la base de datos
connection.connect((error) => {
    if (error) {
        throw error;
    }
    else {
        console.log("aplicacion conectada a base de datos mysql");
    }
});
exports.default = connection;
