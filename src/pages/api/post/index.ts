import { NextApiRequest,NextApiResponse } from "next";
import { conn } from "src/utils/database";


export default async function users(req:NextApiRequest,res:NextApiResponse) {
    
    const {method,body} = req
    
    switch (method) {
        case "GET":
            try {
                const query = "SELECT * FROM post";
                const  response = await conn.query(query);
                return res.status(200).json(response.rows)    
            } catch (error:any) {
                return  res.status(500).json({error: error.message});
            }
            
            case "POST":
                
            try {
                const {id_usuarios,titulo,fecha_publicacion,contenido,estatus} = body;
                
                //const query = 'INSERT INTO usuarios (password,email,nickname) VALUES (MD5($1),$2,$3) RETURNING *'
                const query = 'INSERT INTO post (id_usuarios,titulo,fecha_publicacion,contenido,estatus) VALUES ($1,$2,$3,$4,$5) RETURNING *'
                const values =[id_usuarios,titulo,fecha_publicacion,contenido,estatus]
                
                const respose = await conn.query(query,values)
                
                return res.status(200).json(respose.rows)               
    
            } catch (error:any) {
                
                return  res.status(500).json({error: error.message});
            }
            
        default:
            res.status(400).json("Invalid method")
            break;
    }

}