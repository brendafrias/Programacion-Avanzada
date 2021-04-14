import Server from './class/server';
import userRoutes from './routes/usuarios'; //Rutas
//import mysql from 'mysql';
import connection from './bin/connectionMySql';
import mongoose from 'mongoose';

//Creando servidor web

const server = new Server();

server.start(()=>{
    console.log(`servidor corriendo en puerto:  ${server.puerto} y en host ${server.host}`);
});

//Rutas aplicacion
server.app.use('/users', userRoutes)

//localhost:3000/users/prueba

//coneccion database mysql
connection.connect

//Conexion Mongoose
mongoose.connect('mongodb://localhost:27017/appCurso_mar_vie', {
    useNewUrlParser:true, useCreateIndex:true},
    (error)=>{
        if(error){
            throw error
        }else{
            console.log("aplicacion conectada a base de datos Mongo");
        }
    }
    );//tarea hacer lo mismo de sql pero con mongose de crear un archivo e exportarlo

