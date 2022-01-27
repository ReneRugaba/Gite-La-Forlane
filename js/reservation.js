import React from 'react';
import ReactDOM from 'react-dom';
import StripeContainer from './src/components/stripeContainer';

const App =()=>{
    return(
        <StripeContainer/>
    );
}

export default App

ReactDOM.render(<App/>,document.getElementById("app"))