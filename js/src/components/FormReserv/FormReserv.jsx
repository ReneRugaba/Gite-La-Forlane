import React, { useState } from 'react';

import './FormReserv.css';
import Select from './Select/Select'
import DatePicker from '../DatePicker/DatePicker';
import FullName from './Inputs/FullName/FullName';
import Address from './Inputs/Address/Address';
import ZipCode from './Inputs/ZipCode';
import City from './Inputs/City';
import Phone from './Inputs/Phone';
import Email from './Inputs/Email';
import UserMessage from './Inputs/UserMessage';

const FormReserv = () => {

    const [date, setDate] = useState('');
    const setDateState = ( newDate ) => {
        setDate(newDate)
        console.log(newDate);
    }

    const [firstName, setFirstName] = useState('');
    const setFirstNameState = ( fName ) => {
        setFirstName(fName)
        console.log(firstName);
    }

    const [lastName, setLastName] = useState('');
    const setLastNameState = ( lName ) => {
        setLastName(lName)
        console.log(lastName);
    }

    const [address, setAddress] = useState('');
    const setAddressState = ( addressToSet ) => {
        setAddress( addressToSet )
        console.log( address );
    }
    const [addressCompl, setAddressCompl] = useState('');
    const setAddressComplState = ( addressComplToSet ) => {
        setAddressCompl( addressComplToSet )
        console.log( addressCompl );
    }

    const [zipCode, setZipCode] = useState('');
    const setZipCodeState = ( zipCodeToSet ) => {
        setZipCode( zipCodeToSet )
        console.log( zipCode );
    }

    const [city, setCity] = useState('');
    const setCityState = ( cityToSet ) => {
        setCity( cityToSet )
        console.log( city );
    }

    const [phone1, setPhone1] = useState('');
    const setPhone1State = ( phoneNumberToSet ) => {
        setPhone1( phoneNumberToSet )
        console.log( phone1 );
    }
    const [phone2, setPhone2] = useState('');
    const setPhone2State = ( phoneNumberToSet ) => {
        setPhone2( phoneNumberToSet )
        console.log( phone2 );
    }

    const [email, setEmail] = useState('');
    const setEmailState = ( emailToSet ) => {
        setEmail( emailToSet )
        console.log( email );
    }

    const [message, setMessage] = useState('');
    const setMessageState = ( messageToSet ) => {
        setMessage( messageToSet )
        console.log( message );
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() } className='form-reservation'>
        <h1>{message}</h1>
            <DatePicker dateFunc={ setDateState }/>
            <Select number={ 10 }/>
            <FullName 
            firstNameFunc={ setFirstNameState }
            lastNameFunc={ setLastNameState }/>           
            <Address 
            addressFunc={ setAddressState }
            addressComplFunc={ setAddressComplState }/>      
            <ZipCode zipCodeFunc={ setZipCodeState } />     
            <City cityFunc={ setCityState } />
            <Phone 
            phoneFunc={ setPhone1State } 
            label="Téléphone 1*" />
            <Phone 
            phoneFunc={ setPhone2State } 
            label="Téléphone 2" />
            <Email emailFunc={ setEmailState } />         
            <UserMessage messageFunc={ setMessageState } />       
            <input type="submit" className='btn-submit' value='Valider les informations'/>
        </form>
    );
};

export default FormReserv;