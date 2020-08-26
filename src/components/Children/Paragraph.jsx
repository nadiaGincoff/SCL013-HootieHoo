import React from 'react';

const pStyle = {
    color: 'black',
    fontSize: '22px',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    marginInlineStart: '2em',
    marginBlockStart: '2em'
}

const Paragraph = (props) => {
    return (  
        <div>
            <p style={pStyle}>{props.paragraph}</p>
        </div>
    );
}
 
export default Paragraph;