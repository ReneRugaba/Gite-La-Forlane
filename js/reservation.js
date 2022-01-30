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

    return(
        <>
            
            { !(Object.keys(userInfo).length == 13) && 
                <FormReserv getUserInfo={ getUserInfo } />
            }
            { (Object.keys(userInfo).length == 13) && 
                <StripeContainer/>
            }
        </>
    );
}

export default App

ReactDOM.render(<App/>,document.getElementById("app"))