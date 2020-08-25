import React from 'react'
import logo from '../../assets/img/logo.png'
import style from'./Logo.module.css'

   
    
const Logo = () => {
    return (
        <div className={style.lFather}>
            <img className={style.lS} src={logo} alt="user pic"/>
        </div>
    )
}

export default Logo
