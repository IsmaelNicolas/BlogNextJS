import { NextApiRequest,NextApiResponse } from "next";
import { conn } from "../../../utils/database";


export default async function users(req:NextApiRequest,res:NextApiResponse) {
    
    const {method,body} = req
    
    switch (method) {
        case "GET":
            try {
                const query = "SELECT * FROM USUARIOS";
                const  response = await conn.query(query);
                return res.status(200).json(response.rows)    
            } catch (error:any) {
                return  res.status(500).json({error: error.message});
            }
            
            case "POST":
                
            try {
                const {password,email,nickname} = body;
    
                const query = 'INSERT INTO usuarios (password,email,nickname) VALUES (MD5($1),$2,$3) RETURNING *'
                const values =[password,email,nickname]
                
                const respose = await conn.query(query,values)
                
                return res.status(200).json("creating data")
                
            } catch (error:any) {
                
                return  res.status(500).json({error: error.message});
            }
            break;   
        default:
            res.status(400).json("Invalid method")
            break;
    }

}