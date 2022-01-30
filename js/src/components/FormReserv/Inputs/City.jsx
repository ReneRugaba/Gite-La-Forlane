import React, { useState } from 'react';

const City = ( props ) => {

    const [toggleCityErr, setToggleCityErr] = useState(true);

    function stringContainsNumber( str ) {
        return /\d/.test( str );
    }

    const checkCityInput = (e) => {
        if ( stringContainsNumber(e.target.value) ) {
            setToggleCityErr(false)
            props.cityFunc('');
        } else if ( e.target.value.length < 3 ) {
            setToggleCityErr(false)
            props.cityFunc('');
        } else {
            setToggleCityErr(true)
            props.cityFunc(e.target.value);
        }
    }
    
    return (
        <>
            <label htmlFor="city">Ville*</label>  
            <input 
            onInput={checkCityInput}
            type="txt" 
            className={ toggleCityErr ? 'city' : 'city wrong-input' } 
            name='city'/>
            <p className='error-container'>
                { !toggleCityErr&& 'Veuillez saisir un nom de ville valide !' }
            </p> 
        </>
    );
};

export default City;