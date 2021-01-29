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
import Router from './containers/Router';
//import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './utils/store';

import Layout from './containers/Layout'; // почему не читается?
import MessageField from './containers/MessageField'; // почему не читается?
import App from './containers/MessageField'; //во второй методичке есть такой адрес
                                             // проверить что там подключается.  


const { store, persistor } = initStore();

ReactDOM.render(
<Provider store={ store }>
   <PersistGate loading={ null } persistor={ persistor }>
      <ConnectedRouter history={history}>
         <MuiThemeProvider>
           <Router /> 
         </MuiThemeProvider>
     </ConnectedRouter>
   </PersistGate>
</Provider>,
   document.getElementById('root'),
);

//<BrowserRouter></BrowserRouter>

