import mysql from 'mysql';

//Conexion dataBase MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"appCurso_mar_vie",
    port: 3306

})

//Conectar la base de datos

connection.connect((error)=>{
    if(error){
        throw error
    }else{
        console.log("aplicacion conectada a base de datos mysql");
    }
})


export default connection;