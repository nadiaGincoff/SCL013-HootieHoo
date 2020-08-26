import React, { Fragment } from 'react'
import HeaderKids from '../Header/ChildrensHeader/Header'
import './index.css'
import Girl from '../../img/image-header/header-girl.png';
import Boy from '../../img/image-header/header-boy.png';
import Paragraph from '../Children/Paragraph'

const IndexOfChildren = () => {
    return (    
        <Fragment>
            <div>
                <HeaderKids leftImage={Girl} rightImage={Boy} />
                <Paragraph paragraph={`Aprendamos jugando`} />
            </div>
        </Fragment>
    );
}
 
export default IndexOfChildren;
