

import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";

import '../styles/ChatList.css';


export default class ChatList extends React.Component {

    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleChange = (event) => {
        this.setState( { [event.target.name]: event.target.value });    
    };

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            this.handleAddChat();

        }
    };

    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState( { input: ''});
        }
    };

    /*
   render() {
       return (
           <div className="ChatList">
           <List>
               <Link to="/chat/1/">
                   <ListItem primaryText="Chat 1" leftIcon={<ContentSend />} />
               </Link>
               <Link to="/chat/2/">
                   <ListItem primaryText="Chat 2" leftIcon={<ContentSend />} />
               </Link>
               <Link to="/chat/3/">
                   <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
               </Link>
           </List>
           </div>
       )
   }

   */

//<ContentSend /> из render, primaryText.
   render() {
       const { chats } = this.props;
       const chatElements = Object.keys(chats) .map(chatId => (
           <Link key={ chatId } to={ `/chat/${chatId}` }>
               <ListItem
                   primaryText={ chats[chatId] .title }
                   leftIcon={ <ContentSend/> }
                   /> 
                   </Link>));

                   return (
                       <List>
                           { chatElements }
                            <ListItem
                            key="Add new chat"
                            leftIcon={ <AddIcon /> }
                            onClick={ this.handleAddChat }
                            style={ { height: '60px' } }
                            children= { <TextField
                            key="textField"
                            fullWidth
                            name="input"
                            hintText="Добавить новый чат"
                            onChange={ this.handleChange }
                            value={ this.state.input }
                            onKeyUp={ this.handleKeyUp }
                            /> }
                            />
                     </List>
                   )
   }
}


