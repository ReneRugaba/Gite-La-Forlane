import React, { useState } from 'react';

    const ZipCode = ( props ) => {
        
    const [toggleZipCode, setToggleZipCode] = useState(true)
    const checkZipCode = ( e ) => {
        if ( /^\d{5}$/.test( e.target.value ) ) {
            setToggleZipCode(true);
            props.zipCodeFunc( e.target.value );
        } else {
            setToggleZipCode(false);
            props.zipCodeFunc( '' );
        }
    }


    return (
        <>
            <label htmlFor="zipCode">Code Postal*</label>  
            <input 
            onInput={checkZipCode}
            type="number" 
            className={ toggleZipCode ? 'zip-code' : 'zip-code wrong-input' } 
            name='zip Code' 
            toggle='none'/>
            <p className='error-container'>
                        { !toggleZipCode&& '5 chiffres sont requis !' }
            </p>
        </>
    );
};

export default ZipCode;