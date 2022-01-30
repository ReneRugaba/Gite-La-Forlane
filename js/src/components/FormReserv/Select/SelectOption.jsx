import React, { useEffect, useState } from 'react';

const SelectOption = (props) => {

    return (
        <option value={props.number}>
            {
                props.number + ( props.number > 1 ? '  personnes' : '  personne' )
            }
        </option>
    );
};

export default SelectOption;