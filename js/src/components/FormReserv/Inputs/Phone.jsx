import React, { useState } from 'react';
const Phone = ( props ) => {

    const [togglePhone, setTogglePhone] = useState(true);

    const checkPhoneNumber = (e) => {
        const phoneRegex = /(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})/;
        const userInput = e.target.value;
        if ( phoneRegex.test( userInput ) ) {
            setTogglePhone( true );
            props.phoneFunc( e.target.value );
        } else {
            setTogglePhone( false );
        }
    }

    return (
        <>
            <label htmlFor="phone1">{props.label}</label>  
            <input 
            onInput={ checkPhoneNumber }
            type="tel" 
            className={togglePhone ? 'phone1' : 'phone1 wrong-input' }
            name='phone1'/>
            <p className='error-container'>
                { !togglePhone && 'Numéro de téléphone invalide  !' }
            </p> 
        </>
    );
};

export default Phone;