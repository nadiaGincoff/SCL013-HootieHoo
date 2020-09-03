import React, { Fragment } from 'react';
import './Header.css';
import Navbar from '../../Nav/Navbar';
import Logo from '../../../img/header/header-logo.png'
import useThemeSwitcher from '../../../hooks/useThemeSwitcher'

const HeaderKids = (props) => {

    const ThemeSwitcher = useThemeSwitcher();

    return (
        <Fragment>
            <div className='containerHeader'>
            { ThemeSwitcher }
                <div className='headerContainer'>         
                    <img src={Logo} alt='logo-header' className='headerLogo' />
                    <Navbar />                
                </div>
                
                <div className='imageContainer'>
                    <img src={props.leftImage}  alt='header-image' /> 
                    <img src={props.rightImage} alt='header-image' />
                </div>
            </div>
        </Fragment>
    );
}
 
export default HeaderKids;