import React from 'react';
import PropTypes from 'prop-types';



export default class Message extends React.Component { 

    static propTypes = {
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
    };
 
   render() {
       return <div                   //<div>{ this.props.text }</div> 
       className='message'
       style={{alignSelf: this.props.sender === 'bot'?
       'flex-start' : 'flex-end' }}
       >
<div>{ this.props.text }</div>
<div className='message-sender'>{ this.props.sender }</div>
       </div>
   }
}


// Я откатил назад, вылезли ошибки, не получилось изолировать 
//компонент Message.

/*
Таким образом, компонент стал изолированным и независимым от приложения, 
в котором используется. Именно так и нужно делать в проектах.
Следующий шаг — переиспользование компонентов в разных проектах.
А пиком такого подхода будет выпуск собственной открытой библиотеки компонентов,
такой как Material UI, Bootstrap, Grommet и другие.
 */
