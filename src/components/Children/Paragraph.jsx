import React from 'react';
import '../IndexOfChildren/index.css'

const Paragraph = (props) => {
    return (  
        <div>
            <p className='pStyle'>{props.paragraph}</p>
        </div>
    );
}
 
export default Paragraph;