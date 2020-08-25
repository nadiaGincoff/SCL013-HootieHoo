import React from 'react'
import logo from '../../assets/img/logo.png'


const logoStyle = {width: '60vw', height: '14h', marginTop:'1rem',}
   
    
const Logo = () => {
    return (
        <div style={{ display: 'flex', justifyContent:'center' }}>
            <img style={logoStyle} src={logo} alt="user pic"/>
        </div>
    )
}

export default Logo
