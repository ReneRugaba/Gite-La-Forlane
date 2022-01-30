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
import { useEffect } from 'react/cjs/react.development';

const FormReserv = ( props ) => {

    const [date, setDate] = useState('');
    const setDateState = ( newDate ) => {
        setDate(newDate)
        // console.log(date);
    }

    const [nbOfPersons, setNbOfPersons] = useState(1);
    const setNbOfPersonsState = ( nb ) => {
        setNbOfPersons( nb )
        // console.log(date);
    }

    const [firstName, setFirstName] = useState('');
    const setFirstNameState = ( fName ) => {
        setFirstName(fName)
        // console.log(firstName);
    }

    const [lastName, setLastName] = useState('');
    const setLastNameState = ( lName ) => {
        setLastName(lName)
        // console.log(lastName);
    }

    const [address, setAddress] = useState('');
    const setAddressState = ( addressToSet ) => {
        setAddress( addressToSet )
        // console.log( address );
    }
    const [addressCompl, setAddressCompl] = useState('');
    const setAddressComplState = ( addressComplToSet ) => {
        setAddressCompl( addressComplToSet )
        // console.log( addressCompl );
    }

    const [zipCode, setZipCode] = useState('');
    const setZipCodeState = ( zipCodeToSet ) => {
        setZipCode( zipCodeToSet )
        // console.log( zipCode );
    }

    const [city, setCity] = useState('');
    const setCityState = ( cityToSet ) => {
        setCity( cityToSet )
        // console.log( city );
    }

    const [phone1, setPhone1] = useState('');
    const setPhone1State = ( phoneNumberToSet ) => {
        setPhone1( phoneNumberToSet )
        // console.log( phone1 );
    }
    const [phone2, setPhone2] = useState('');
    const setPhone2State = ( phoneNumberToSet ) => {
        setPhone2( phoneNumberToSet )
        // console.log( phone2 );
    }

    const [email, setEmail] = useState('');
    const setEmailState = ( emailToSet ) => {
        setEmail( emailToSet )
        // console.log( email );
    }

    const [message, setMessage] = useState('');
    const setMessageState = ( messageToSet ) => {
        setMessage( messageToSet )
        // console.log( message );
    }

    const [price, setPrice] = useState(0);
    const setPriceState = ( priceToSet ) => {
        setPrice( priceToSet )
    }

    //"01/30/2022 - 02/02/2022"

    const applyPrice = ( date ) => {
        const dateArr = date.split(' - ');
        
        if ( dateArr.length === 2 ) {
            const startDate = dateArr[0];
            const startDateArr = startDate.split('/');
            const startDateMonth = startDateArr[0]
            const startDateDay = startDateArr[1];
            const startDateYear = startDateArr[2]

            const endDate = dateArr[1];
            const endDateArr = endDate.split('/');
            const endDateMonth = endDateArr[0]
            const endDateDay = endDateArr[1];
            const endDateYear = endDateArr[2]

            console.log(startDateArr);
            console.log(endDateArr);
            console.log( dateArr );
        }
    }

    useEffect( () => {

        applyPrice( date );

    },[date])

    const checkUserInfo = (e) => {
        e.preventDefault();

        let expectedInfo = false;

        const userInfo = {
            date: date,
            nbOfPersons: nbOfPersons,
            firstName: firstName,
            lastName: lastName,
            address: address,
            addressCompl: addressCompl,
            zipCode: zipCode,
            city: city,
            phone1: phone1,
            phone2: phone2,
            email: email,
            message: message,
            price: price
        }

        for( let key of Object.keys( userInfo ) ){
            let isOptionalKey = false;
            switch (key) {
                case 'addressCompl':
                case 'phone2':
                    isOptionalKey = true;
                break;               
            }
            if ( isOptionalKey ) {
                continue;
            } else if ( key === 'nbOfPersons') {
                if ( userInfo.nbOfPersons < 1 || userInfo.nbOfPersons > 10 ) {
                    alert("Une erreur c'est produite, nombre de personnes invalide")
                    expectedInfo = false;
                    break;
                }
            } else if ( key === 'price' &&  userInfo.price < 0 ) { // In the next time we Replace 0 by expected price 
                alert("Une erreur c'est produite")
                expectedInfo = false;
                break;
            }else if ( userInfo[key].length == 0 ) {
                alert("Nous vous prions de bien vouloir nous fournir toutes les informations requises")
                    expectedInfo = false;
                    break;
            } else {
                expectedInfo = true;
            }
        
        }

        if ( expectedInfo ) props.getUserInfo( userInfo ); 

    }

    return (
        <form onSubmit={ checkUserInfo } className='form-reservation'>
            <DatePicker 
            dateFunc={ setDateState }/>
            <Select 
            nbOfPersonsFunc={ setNbOfPersonsState } 
            number={ 10 }/>
            <FullName 
            firstNameFunc={ setFirstNameState }
            lastNameFunc={ setLastNameState }/>           
            <Address 
            addressFunc={ setAddressState }
            addressComplFunc={ setAddressComplState }/>      
            <ZipCode 
            zipCodeFunc={ setZipCodeState } />     
            <City 
            cityFunc={ setCityState } />
            <Phone 
            phoneFunc={ setPhone1State } 
            label="Téléphone 1*" />
            <Phone 
            phoneFunc={ setPhone2State } 
            label="Téléphone 2" />
            <Email 
            emailFunc={ setEmailState } />         
            <UserMessage 
            messageFunc={ setMessageState } />       
            <input 
            type="submit" 
            className='btn-submit'
            value='Valider les informations'/>
        </form>
    );
};

export default FormReserv;