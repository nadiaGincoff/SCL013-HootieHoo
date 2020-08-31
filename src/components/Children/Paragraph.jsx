import React from 'react';

const pStyle = {
    color: 'black',
    fontSize: '18px',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    marginInlineStart: '0.5em',
    marginInlineEnd: '0.5em',
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