import React, { Fragment } from 'react';
import './Header.css';
import Navbar from '../../Nav/Navbar';

const HeaderKids = (props) => {
    return (
        <Fragment>
            <div className='container'>
                <Navbar />
                <img src={props.img} className='headerLogo' />
                <div className='imageContainer'>
                    <img src={props.leftImage}  alt='header-image' /> 
                    <img src={props.rightImage} alt='header-image' />
                </div>
            </div>
        </Fragment>
    );
}
 
export default HeaderKids;