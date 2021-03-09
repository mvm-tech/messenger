import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';

// Загвоздка с messageReducer
//если его включить то терминал выдает ошибку

export default (history) => combineReducers ({
    router: connectRouter(history),
    chatReducer,
    messageReducer,
   
});