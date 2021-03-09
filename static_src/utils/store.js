import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from'redux-persist/lib/stateReconciler/autoMergeLevel2';
import initReducers from './../reducers';
import middlewares from '../middlewares';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messageReducer','chatReducer'],
};
/*Разберемся в persist-config:
key — ключ, по которому будет храниться Store в памяти. 
Нужен для внутренней кухни. Главное — не смешивать разные хранилища,
то есть использовать для них разные ключи.
storage — используемое хранилище.
stateReconciler — способ восстановления (регидратации) Store. 
autoMergeLevel2 позволяет проводить восстановление на уровне отдельных Reducer’ов.
Поэтому можно без проблем добавлять новые переменные в них — при регидратации Store 
они не будут затерты старой копией, произойдет слияние.
whitelist — список Reducer’ов, данные которых будут сохраняться
 */

export const history = createBrowserHistory()

function initStore () {
    const innitialStore = {};

    const store = createStore (
        persistReducer(persistConfig, initReducers(history)),
        innitialStore,
 /*  return createStore (
        initReducers (history),
        innitialStore,  */
          compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
        
                                               window.__REDUX_DEVTOOLS_EXTENSION__ ?

        window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
 );
 const persistor = persistStore(store);
 return { store, persistor };

        }

export default initStore



