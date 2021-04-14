"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./class/server"));
const usuarios_1 = __importDefault(require("./routes/usuarios")); //Rutas
//import mysql from 'mysql';
const connectionMySql_1 = __importDefault(require("./bin/connectionMySql"));
const mongoose_1 = __importDefault(require("mongoose"));
//Creando servidor web
const server = new server_1.default();
server.start(() => {
    console.log(`servidor corriendo en puerto:  ${server.puerto} y en host ${server.host}`);
});
//Rutas aplicacion
server.app.use('/users', usuarios_1.default);
//localhost:3000/users/prueba
//coneccion database mysql
connectionMySql_1.default.connect;
//Conexion Mongoose
mongoose_1.default.connect('mongodb://localhost:27017/appCurso_mar_vie', {
    useNewUrlParser: true, useCreateIndex: true
}, (error) => {
    if (error) {
        throw error;
    }
    else {
        console.log("aplicacion conectada a base de datos Mongo");
    }
}); //tarea hacer lo mismo de sql pero con mongose de crear un archivo e exportarlo
