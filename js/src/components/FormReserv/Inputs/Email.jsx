import React, { useState } from 'react';
const Email = ( props ) => {
    const mailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [ emailOneIsOk, setEmailOneIsOk ] = useState(true);
    const [ emailTwoIsOk, setEmailTwoIsOk ] = useState(true);
    const [ emailErr, setEmailErr ] = useState('');
    
    const verifyInputs = ( str ) => {
        if ( emailOneIsOk && emailTwoIsOk ) {
            props.emailFunc( str );
        }
    }

    const checkEmailOne = ( e ) => {
        const inputTwoVal = document.querySelector('.emailConfirm').value;
        if ( mailRegex.test( e.target.value ) ) {
            setEmailOneIsOk( true );
            if ( e.target.value !== inputTwoVal ) {
                setEmailTwoIsOk( false )
            } else {
                setEmailTwoIsOk( true )
                verifyInputs( e.target.value );
            }
        } else {
            setEmailOneIsOk( false );
        }
    }
    
    const checkEmailTwo = ( e ) => {
        const inputOneVal = document.querySelector('.email').value;
        if ( e.target.value === inputOneVal &&  mailRegex.test( e.target.value ) ) {
            setEmailTwoIsOk( true );
            verifyInputs( e.target.value );
        } else {
            setEmailTwoIsOk( false );
        }
    }

    return (
        <>
            <label htmlFor="email">Email*</label> 
            <input 
            onInput={ checkEmailOne }
            type="email" 
            className={ emailOneIsOk ? 'email' : 'email wrong-input' }  
            name='email'/>
            <p className='error-container'>
                { !emailOneIsOk&& 'Format non valide !' }
            </p> 

            <label htmlFor="emailConfirm">Confirmation Email*</label> 
            <input 
            onInput={ checkEmailTwo }
            type="email" 
            className={ ( emailOneIsOk && emailTwoIsOk ) ? 'emailConfirm' : 'emailConfirm wrong-input' }   
            name='emailConfirm'/>
            <p className='error-container'>
                { (!emailTwoIsOk || !emailOneIsOk) && 'Cette adresse mail doit être identique à la précédente !' }
            </p>   
        </>
    );
};

export default Email;