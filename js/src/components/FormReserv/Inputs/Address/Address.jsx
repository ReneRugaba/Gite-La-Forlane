import React, { useState } from 'react';
import './Address.css';

// ^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$

const Address = (props) => {

    const [addressComplete, setAddressComplete] = useState(true);

    const checkAddress = ( str ) => {
        return /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/.test(str);
    }

    const addressInputEvent = (e) => {
        if ( checkAddress( e.target.value ) ) {
            setAddressComplete( true );
            props.addressFunc( e.target.value );
        } else {
            props.addressFunc( '')
            setAddressComplete( false );
        }
    }

    const addressComplEvent = (e) => {
        if ( e.target.value.length > 0 ) {
            props.addressComplFunc( e.target.value );
        }
    }

    return (
        <>
            <label htmlFor="address">Addresse*</label>  
            <input
            onInput={ addressInputEvent } 
            type="text"
            className={ addressComplete ? 'address' : 'address wrong-input' }
            name='address'    
            />
            <p className='error-container'>
                { !addressComplete && 'Veuillez saisir une adresse valide !' }
            </p>

            <label htmlFor="addressComplement">Complément d'adresse</label>  
            <input
            onInput={ addressComplEvent } 
            type="text"
            className='addressComplement'
            name='addressComplement'         
            />
        </>
    );
};

export default Address;