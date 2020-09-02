import React, { Fragment } from "react";
import HeaderKids from "../Header/ChildrensHeader/Header";
import together from "../../img/header/header-together.png";
import puma from "../../img/header/header-puma.png";
import Paragraph from "../Children/Paragraph";
import { Link } from "react-router-dom";
import mini1 from "../../assets/img/minicolorear1.png";
import mini2 from "../../assets/img/minicolorear2.png";
import bRegresar from "../../assets/img/botonregresar.png";
import style from "../PaintChildren/MenuPaint.module.css";

export const BackButton = () => {
    return (
        <div >
            <img className={style.bBack}src={bRegresar}></img>
        </div>
    )
}

const MenuPaint = () => {
    return (
        
            <Fragment>
                <div className={style.divContainer}>
                <HeaderKids leftImage={together} rightImage={puma} />
                <Paragraph  paragraph={`Elige la imagen a colorear`} style={{fontSize: '24'}}/>
            <div  className={style.fatherD}>
            
            <Link to='/MenuColorearImg1'> 
             <img className={style.imgOneTwo} src={mini1} alt='imagen patrulla'>
            </img>
            </Link>
            <Link to='/MenuColorearImg2'> 
             <img src={mini2} className={style.imgOneTwo} alt='imagen coronavirus'>
            </img>
            </Link>
        
            </div>
            <div>
                <Link to='/Niños'>
                <BackButton ></BackButton>
                </Link>
            </div>
            </div>
            </Fragment>
        
    )
}

export default MenuPaint;
