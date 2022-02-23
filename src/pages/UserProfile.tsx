import React, {useState} from "react";
import Image from "next/image";

import HomepageHeader from "./components/homepage/HomepageHeader";
import HomepageFooter from "./components/homepage/HomepageFooter";
import Posts from "./components/user/Posts";

import userLogo from "src/utils/logos/pngwing.com.png"
import imgBkg from "src/utils/images/user-bkg.jpg"

// function EditUser({show}: ShowDisplay) {
//     // var aux = document.getElementsByClassName('editContainer');
//     return (
//         <div className='edit-container' style={{ display: show }}>
//             <label>Nombre de ususario</label>
//             <input type={'text'}></input>
//             {/* <Image alt='' src=''/> */}
//             <label>Foto de perfil</label>
//             <button>Guardar</button>
//             {/* <button onClick={()=>aux[0].style.display='none'}>Cancelar</button> */}
//         </div>
//     );
// }

function User() {
    const [show, setShow] = useState('none');
    return (
        <div>
            <HomepageHeader />
            <Image id='img-bkg' src={imgBkg} alt=''/>
            <div id='user__container'>
                <div id='user__data'>
                    <Image id='user__img' src={userLogo} alt='' />
                    <label className='user__lbl'>Nombre de usuario</label>
                    <label className='user__lbl'>usuario@espe.edu.ec</label>
                    <button onClick={() => setShow('')}>Editar Perfil</button>
                    {/* <EditUser show=' ' /> */}
                </div>
                <div id='user__activity'>
                    <label className='user__lbl'>Comentarios: #</label>
                    <label className='user__lbl'>Preguntas: #</label>
                    <h3 id='user__h3'>Publicaciones activas</h3>
                    <Posts />
                    <button className='user__btn'>ver más</button>
                </div>
            </div>
            <HomepageFooter />
        </div>
    );
}

export default User;