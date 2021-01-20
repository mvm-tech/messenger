import React from 'react';
import PropTypes from "prop-types";

import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';

import '../styles/styles.css';

/* //4 урок меняем структуру MessageField
export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
         // создадим ref в поле `textInput` для хранения DOM-элемента
        this.textInput = React.createRef();
    }

    state = {
        //messages: ['Hello', 'How you do?']
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "How you do?", sender: 'bot' }],
        input: '',
        storingChats: '',
        

    };
// Ставим фокус на <input> при монтировании компонента

    componentDidMount() {
        //this.textInput.current.focus();
 }
  */
export default class MessageField extends React.Component {
              
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired, 
    };

    state = {
        input: '',
    };

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage (message, sender);
    }

        if (sender === 'me') {
            this.setState( { input: '' });
        }
};


handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value });

};

handlKeyUp = (event) => {
    if (event.keyCode === 13) { //Enter
        this.handleSendMessage(this.state.input, 'me');

    }
};

render() {
    const { chatId, messages, chats } = this.props;

    const messageElements = chats [chatId].messageList.map(messageId => (
        <Message
        key={ messageId }
        text={ messages[messageId].text }
        sender={ messages[messageId].sender }
        />));

        return [
            <div key='messageElements' className= "message-field">
                { messageElements }
            </div>,
            <div key='textInput' style={ { width: '100%', display: 'flex' } }>
                <TextField
                name="input"
                fullWidth={ true }
                hintText="Введите сообщение"
                style={ { fontSize: '22px' } }
                onChange={ this.state.input }
                onKeyUp={ this.handleKeyUp }
                />

                <FloatingActionButton
                onClick={ () => this.handleSendMessage(this.state.input, 'me')}>
                    <SendIcon />
                    </FloatingActionButton>
                    </div>
         ]
    
   }

}


 // C пятого урока меняем содержимое компонента MessageField
/*
 export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    };
 
    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageList: []},
        },
        messages: {
            1: { text: "Привет!", sender: 'bot' },
            2: { text: "Здравствуйте!", sender: 'bot' },
        },
        input: '',
    };

    
   componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state;
    if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
        Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
        setTimeout(() =>
            this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
    }
}

handleSendMessage = (message, sender) => {
    const { messages, chats, input } = this.state;
    const { chatId } = this.props;

    if (input.length > 0 || sender === 'bot') {
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,
                [messageId]: {text: message, sender: sender}},
            chats: {...chats,
                [chatId]: { ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            },
        })
    }
    if (sender === 'me') {
        this.setState({ input: '' })
    }
};

handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
};

handleKeyUp = (event) => {
    if (event.keyCode === 13) { // Enter
        this.handleSendMessage(this.state.input, 'me')
    }
};

render() {
    const { messages, chats } = this.state;
    const { chatId } = this.props;

    const messageElements = chats[chatId].messageList.map((messageId, index) => (
        <Message
            key={ index }
            text={ messages[messageId].text }
            sender={ messages[messageId].sender }
        />));

    return [
        <div key='messageElements' className="message-field">
            { messageElements }
        </div>,
        <div key='textInput' style={ { width: '100%', display: 'flex' } }>
            <TextField
                name="input"
                fullWidth={ true }
                hintText="Введите сообщение"
                style={ { fontSize: '22px' } }
                onChange={ this.handleChange }
                value={ this.state.input }
                onKeyUp={ this.handleKeyUp }
            />
            <FloatingActionButton
                onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
                <SendIcon />
            </FloatingActionButton>
        </div>
    ]
}
}
*/
/*
    componentDidUpdate() {
        if (this.state.messages.length %2 === 1) // Остаток от деления на 2
        setTimeout(() =>
        this.setState(
            { messages: [ ...this.state.messages, 'Do not bother me, I am a robot!' ] }), 1000);
            
///////////////////////////////////
            if (this.state.messages[this.state.messages.length - 1] .sender ==='me') {

                setTimeout(() => 
                this.setState({
                    messages: [...this.state.messages, {text: 'Do not bother me, I am a robot!', sender: 'bot'}
                    ]}),
                1000);
            }
    }
 
    handleClick = () => {
        this.setState({messages: [...this.state.messages, 'Fine']});
    };

    handleClick = () => {
        this.setState({ messages: [...this.state.messages, {text:'fine', sender: 'me'}]});
    };

    handleClick = (message) => {
        this.sendMessage (message)
    };

    handleChange = (event) => {
        this.setState({input: event.target.value});

    };

      
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

 };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { //Enter
            this.sendMessage = (message)
        }
    };

    sendMessage = (message) => {
        this.setState({
            messages: [...this.state.messages, {text: message, sender: 'me'} ],
            input: '',
     });
    };

    render() {
        
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text }  sender= {message.sender}/>));

            return <div className='layout'>
                <div className='message-field'>
                { messageElements }
                </div>

            <div style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
               />
               <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                   <SendIcon />
               </FloatingActionButton>
           </div>

                
                </div>
                  
}
}
*/
//                                  Стандартная форма
/*
                <input
                ref={ this.textInput }
                name='input'
                style={ { fontSize: '22px' } }
                onChange={ this.handleChange }
                value={ this.state.input }
                onKeyUp={ (event) => this.handleKeyUp(event, this.state.input)}
                />

                
                
                
                <button
                style={ {fontSize: '22px'} }
                onClick={ () => this.handleClick(this.state.input) }
                > Send message </button>

*/
