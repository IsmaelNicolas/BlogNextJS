import React, { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import sun from "src/utils/images/sun.png";
import moon from "src/utils/images/half-moon.png";
import Link from "next/link";
import { setCookies } from 'cookies-next';

const handleSubmint = (e:FormEvent)=>{
      e.preventDefault();
      
}
const handleChange = (e:ChangeEvent) =>{

}


function Login() {
  return (
    <form onSubmit={handleSubmint}>
        <div className="LoginS-bodylog">
        <div className="LoginS-container">
          <div className="LoginS-boxLog">
            <h1>Inicia Sesion</h1>
            <form id="LoginS-form" />
            <label className="LoginS-labelUser">Usuario</label>
            <p>
              <input className="LoginS-userBox" maxLength={100} name="usuario" type="text" />
            </p>
            <label className="LoginS-labelPassword">Contraseña</label>
            <p>
              <input className="LoginS-userBox" minLength={50} name="password" type="password" />
            </p>
            <p>
              ¿No tiene cuenta? <Link href="/register">Regístrate</Link>
            </p>
          </div>
          <div className="LoginS-botones">
            <input className="LoginS-btn" type="submit" defaultValue="Iniciar Sesion" onChange={handleChange}/>
            <button className="LoginS-btn-google" id="LoginS-btn_google">
              Inicia con Google
            </button>
          </div>
          <div className="LoginS-logo" />
        </div>
      </div>
  </form>
  );
}

export default Login;

        // <input type="radio" name="LoginS-dark-ligth" id="LoginS-d-mode" defaultChecked />
        // <label htmlFor="LoginS-d-mode">
        //   <Image src={sun} id="LoginS-img" alt=""/>
        // </label>
        // <input type="radio" name="LoginS-dark-ligth" id="LoginS-l-mode" />
        // <label htmlFor="LoginS-l-mode">
        //   <Image src={moon} id="LoginS-img" alt=""/>
        // </label>