import React, { useEffect, useState } from 'react';

const FullName = (props) => {

    const [firstnameComplete, setFirstNameComplete] = useState(true);
    const [firstNameError, setNameError] = useState('');

    const [lastNameComplete, setLastNameComplete] = useState(true);
    const [lastNameError, setLastNameError] = useState('');

    function stringContainsNumber( str ) {
        return /\d/.test( str );
    }

    const checkFirstName = (e) => {

        if ( stringContainsNumber(e.target.value) ) {
            setFirstNameComplete(false);
            setNameError('Que des lettres !');
            props.firstNameFunc('');
        } else if (e.target.value.length < 3) {
            setFirstNameComplete(false);
            setNameError('Saisie invalide !');
            props.firstNameFunc('');
        } else {
            setFirstNameComplete(true);
            props.firstNameFunc(e.target.value);
        }
    }

    const checkLastName = (e) => {
        if ( stringContainsNumber(e.target.value) ) {
            setLastNameComplete(false);
            setLastNameError('Que des lettres !')
            props.lastNameFunc('');
        } else if (e.target.value.length < 3) {
            setLastNameComplete(false);
            setLastNameError('Saisie invalide !')
            props.lastNameFunc('');
        } else {
            setLastNameComplete(true)
            props.lastNameFunc(e.target.value);
        }
    }

    return (
            <div className='user-name-inputs'>
                <div className='user-name-input'>
                    <label htmlFor="firstName">Prénom*</label>    
                    <input
                    onInput={ (e) => checkFirstName(e) } 
                    type="text" 
                    className={ firstnameComplete ? 'firstName' : 'firstName wrong-input' }
                    name='firstName'   
                    />
                    <p className='error-container'>
                        { !firstnameComplete&& firstNameError}
                    </p>
                </div>
                <div className='user-name-input'>
                    <label htmlFor="lastName">Nom*</label>  
                    <input
                    onInput={ (e) => checkLastName(e)}  
                    type="text" 
                    className={ lastNameComplete ? 'lastName' : 'lastName wrong-input' } 
                    name='lastName'/>
                    <p className='error-container'>
                        { !lastNameComplete&& lastNameError }
                    </p>
                </div>
            </div>
    );
};

export default FullName;