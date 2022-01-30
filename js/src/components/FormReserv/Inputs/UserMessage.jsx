import React from 'react';

const UserMessage = ( props ) => {
    return (
        <>
            <label htmlFor="emailConfirm">Votre message</label> 
            <textarea
            onInput={ (e) => props.messageFunc( e.target.value ) }
            className='user-message' 
            name='message'>
            </textarea>
        </>
    );
};

export default UserMessage;