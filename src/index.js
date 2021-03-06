import React from 'react';
import ReactDOM from 'react-dom';

// I have used bootstrap.min.css of lux theme created by bootswatch
// Reference link - https://bootswatch.com/lux/
import './assets/css/vendor/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
