import React from 'react';
import SelectOption from './SelectOption';
import './Select.css';

const Select = (props) => {// props.number is the max of persons 

    const getOption = () => {
        const optionsArr = [];
        for ( let i = 1; i <= props.number; i++ ) {
            optionsArr.push( <SelectOption key={`option` + i} number={i}/> ) 
        }
        return optionsArr;
    }

    const selectNbOfPersons = (e) => {
        props.nbOfPersonsFunc( e.target.value );
    }

    return (
        <div className='nbOfPersons-container'>
            <label form='nbOfPersons'>Nombre de personnes*</label>
            <select 
            onChange={ selectNbOfPersons }
            name="nbOfPersons">
                {
                    <>
                        {getOption()}
                    </>   
                }
            </select>
        </div>
    );
};

export default Select;