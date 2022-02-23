import { route } from "next/dist/server/router";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import halfmoon from 'src/utils/logos/half-moon.png'
import sun from 'src/utils/logos/sun.png'


function Register()
{
    const router = useRouter() 
    return(
    <div>
        <body>
    
    <input type="radio" name="dark-ligth" id="d-mode" checked></input>
    <input type="radio" name="dark-ligth" id="l-mode"></input>

    <div className="card">
        <div className="content">

        <form  id="form">
            <h2>Crea tu cuenta gratis</h2>
            <label className="label">Nombre completo</label>
            <input type="text" placeholder="Enter your Full Name here" required></input>
            <br></br>
            <label className="label">Correo</label>
            <input type="email" placeholder="Enter your Email here" required></input>
            <br></br>
            <label className="label">Contraseña</label>
            <input type="password" placeholder="Enter your Password here" required></input>
            <br></br>   
            <input type="submit" value="Crear Cuenta" className="btn"></input>
            <label className="label"> Ya tienes cuenta? <Link href="/login">Inicia sesión</Link></label>
            
        </form>

    </div>
    </div>   
    
    <div id="imge"></div>
    </body>
    </div>

    );
}
export default Register;
//<label htmlFor="l-mode"><img src={halfmoon} id="img"/></label>
//<label htmlFor="d-mode"><img src={sun} id="img"/></label>