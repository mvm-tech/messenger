// console.log('It works!');
/*import { script } from './script';

script();
console.log('А это index.js');
*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
   'h1',
   { className: "element" },
   'Кажется, мы подключили React',
);

ReactDOM.render(
   element,
   document.getElementById('root'),
);*/
/*
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1 className="element">Кажется, мы подключили React</h1>;

ReactDOM.render(
   element,
   document.getElementById('root'),
);*/
// Ниже написан функциональный компонент
/*
import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?','что нового?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

ReactDOM.render(
   <MessageField messages={ messages } />,
   document.getElementById('root'),
);*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router'
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

*/


import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './components/Layout';
import MessageField from './components/MessageField.jsx'; // почему не читается?



ReactDOM.render(
   <BrowserRouter>
   <MuiThemeProvider>
    <Router /> 
   </MuiThemeProvider>
   </BrowserRouter>,
   document.getElementById('root'),
);

