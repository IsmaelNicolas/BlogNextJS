import React from "react";
import Image from "next/image";
import img1 from 'src/utils/images/gris.jpg'

function Posts() {
    return (
        <div id="board-publication">
            <div className="publication">
            <Image id="publication__img" src={img1} alt=""/>
            <h3 id="publication__h3">Titulo</h3>
            <p id="publication__description">Description</p>
        </div>
        <div className="publication">
            <Image id="publication__img" src={img1} alt=""/>
            <h3 id="publication__h3">Titulo</h3>
            <p id="publication__description">Description</p>
        </div>
        <div className="publication">
            <Image id="publication__img" src={img1} alt=""/>
            <h3 id="publication__h3">Titulo</h3>
            <p id="publication__description">Description</p>
        </div>
        <div className="publication">
            <Image id="publication__img" src={img1} alt=""/>
            <h3 id="publication__h3">Titulo</h3>
            <p id="publication__description">Description</p>
        </div>
        </div>
    );
}

export default Posts;
