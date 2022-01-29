import React from 'react';
import ReactDOM from 'react-dom';
import FormReserv from './src/components/FormReserv/FormReserv';
import StripeContainer from './src/components/stripeContainer';
import './src/style/App.css'

const App =()=>{
    return(
        <>
            <StripeContainer/>
            <FormReserv />
        </>
    );
}

export default App

ReactDOM.render(<App/>,document.getElementById("app"))