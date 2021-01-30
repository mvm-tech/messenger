
import React from 'react';
import { exact } from 'prop-types'; //не работает exact?
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout';


export default class Router extends React.Component {
    // переключение между чатами // почему то не срабатывает?
    //срабатывает но в Header не меняется название.
   render() {
       return (
           <Switch>
               <Route exact={ true } path='/' component={ Layout } />
               <Route 
                 exact
                 path='/chat/ :chatId/'
                 render= { obj => <Layout
                 chatId={ Number(obj.match.params.chatId) }
            />
               }
         />

           </Switch>
   
       )
   }
}

// Просто чаты

/* <Switch>
               <Route exact path='/' component={ Layout } />
               <Route exact path='/chat/1/' render={ () =>
                   <Layout chatId={ 1 } /> } />
               <Route exact path='/chat/2/' render={ () =>
                   <Layout chatId={ 2 } /> } />
               <Route exact path='/chat/3/' render={ () =>
                   <Layout chatId={ 3 } /> } />
           </Switch>*/