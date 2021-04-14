import express from 'express'; //importamos una libreria para poder crear el servidor que escuche peticiones.

class Server{
    public app:express.Application;
    public host:string = "localhost";
    public puerto:number = 3000;

    constructor(){
        this.app = express();

    }

    start(callback:any){
        this.app.listen(this.puerto,this.host,callback);

    }
}

export default Server;//esto sirve para exportar la clase server a otros lados