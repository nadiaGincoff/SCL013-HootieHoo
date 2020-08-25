import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";
import Logo from '../Logo/Logo'
import {Animated} from "react-animated-css";
import style from '../Button/Button.module.css'


const hStyle ={color:'#592D84', fontSize:'26px', fontFamily:'verdana',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}
const dPStyle ={textAlign:'center', height:'10vh', width:'80vw', marginLeft:'2.5rem'}
const dBStyle={display: 'flex', flexDirection:'column', alignContent:'center', alignItems:'center', alignContent:'space-between', marginTop:'4rem'}
const pStyle={color:'black', fontSize:'16px', fontFamily:'verdana', textAlign:'center'}




const Inicio = () => {
  return (
    <Fragment>
      <div  style={{backgroundColor:'white', height:'100vh'}} className="container-custom">
        <div >
          <Logo />
        <div>
          <Animated animationIn="zoomInDown" animationOut="fadeOut" isVisible={true}>
          <div  style={{ display: 'flex', justifyContent:'center' }} >
            <h2 style={hStyle} >Ganémosle al virus</h2>
            </div>
          </Animated>
        <div style={dPStyle}>
          <p style={pStyle} >Programa de capacitación y apoyo para trabajar prevención y autocuidado en niños y niñas durante la contingencia COVID-19</p>
          </div>
        <div style={dBStyle}>
          <Link to="/Adulto"><button  title="Adulto" className={style.bInit}> Responsable del niñ@ </button></Link>
          <Link to="/Niños"><button    title="Niños"  className={style.bInit}> Soy niñ@ </button></Link>
        </div>
      </div>
    </div>
  </div>
</Fragment>
  )
}

export default Inicio