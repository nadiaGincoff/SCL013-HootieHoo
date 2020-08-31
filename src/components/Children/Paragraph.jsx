import React from 'react';

const pStyle = {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    marginInlineStart: '1em',
    marginInlineEnd: '1em',
    marginBlockEnd: '1em',
    marginBlockStart: '1em',
    textAlign: 'center'
}

const Paragraph = (props) => {
    return (  
        <div>
            <p style={pStyle}>{props.paragraph}</p>
        </div>
    );
}
 
export default Paragraph;