import React from 'react';

const validationComponent = (props) => {
    let outputMessage = (
        <p>Text too short</p>
    );
    if(props.textLength >= 5){
        outputMessage = (
            <p>Text is long enough</p>
        );
    }
    return (
        <div>
            {outputMessage}
        </div>
    )
};

export default validationComponent;