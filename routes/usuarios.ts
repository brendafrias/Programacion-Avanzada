import {Router,Response,Request} from 'express';

const userRoutes = Router();//gurdo todos los metodos de routs en una constante.

userRoutes.get('/prueba', (req :Request, res:Response)=>{//req cada vez q recivamos una peticion request(lo que enviamos) y rest response(lo que respondemos).

    res.json({
        estado: "success",
        mensaje: "ok"
    })

})

export default userRoutes;