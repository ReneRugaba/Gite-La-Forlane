import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
const Email = ( props ) => {
    const mailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [ emailOneIsOk, setEmailOneIsOk ] = useState(true);
    const [ emailTwoIsOk, setEmailTwoIsOk ] = useState(true);
    
    const verifyInputs = ( str ) => {
        if ( emailOneIsOk && emailTwoIsOk ) {
            props.emailFunc( str );
        } else {
            props.emailFunc( '' );
        }
    }

    useEffect( () => {

        document.querySelector('.email')
        .addEventListener('change', (e) => {
            const inputTwoVal = document.querySelector('.emailConfirm').value;
            if ( mailRegex.test( e.target.value )  ) { 
                setEmailOneIsOk( true );
            } 
            else if (mailRegex.test( e.target.value ) && e.target.value == inputTwoVal) {
                setEmailOneIsOk( true );
                setEmailTwoIsOk( true );
            } 
            else if (!mailRegex.test( e.target.value )) {
                setEmailOneIsOk( false );
            } else {
                setEmailOneIsOk( false );
                setEmailTwoIsOk( false );
            }
            verifyInputs( e.target.value );
            console.log(e.target.value);
        });

        document.querySelector('.emailConfirm')
        .addEventListener('change', (e) => {
            const inputOneVal = document.querySelector('.email').value;
            if ( (e.target.value === inputOneVal) &&  mailRegex.test( e.target.value ) ) {
                setEmailOneIsOk( true );
                setEmailTwoIsOk( true );
            } else {
                setEmailTwoIsOk( false );
            }
            verifyInputs( e.target.value );
            console.log(e.target.value);
        });

        return () => {
            document.querySelector('.email')
            .removeEventListener('change');
            document.querySelector('.emailConfirm')
            .removeEventListener('change');
        }

    },[emailOneIsOk, emailTwoIsOk])

    return (
        <>
            <label htmlFor="email">Email*</label> 
            <input 
            autoComplete="none"
            type="email" 
            className={ emailOneIsOk ? 'email' : 'email wrong-input' }  
            name='email'/>
            <p className='error-container'>
                { !emailOneIsOk&& 'Format non valide !' }
            </p> 

            <label htmlFor="emailConfirm">Confirmation Email*</label> 
            <input 
            autoComplete="none"
            type="email" 
            className={ ( emailOneIsOk && emailTwoIsOk ) ? 'emailConfirm' : 'emailConfirm wrong-input' }   
            name='emailConfirm'
            />
            <p className='error-container'>
                { (!emailTwoIsOk || !emailOneIsOk) && 'Cette adresse mail doit être identique à la précédente !' }
            </p>   
        </>
    );
};

export default Email;