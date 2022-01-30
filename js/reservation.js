import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FormReserv from './src/components/FormReserv/FormReserv';
import StripeContainer from './src/components/stripeContainer';
import './src/style/App.css'

const App =()=>{

    const [userInfo, setUserInfo] = useState({});
    const getUserInfo = ( infoObj ) => { // On submit
        setUserInfo( infoObj );
        console.log(infoObj)
    } 

    // const getFreshState = () => {
    //     return userInfo;
    // }

    return(
        <>
            <StripeContainer/>
            <FormReserv getUserInfo={ getUserInfo } />
        </>
    );
}

export default App

ReactDOM.render(<App/>,document.getElementById("app"))