import React from 'react';
import './InputError.css';


const InputError = ( props ) => {
    return (
        <p className='input-error'>
            {props.errorMessage}
        </p>
    );
};

export default InputError;