import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
//import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import { addChat } from '../actions/chatActions';


import '../styles/ChatList.css';


//export default 
class ChatList extends React.Component {

    /*Для контроля типов передаваемых в компонент props’ов можно
 использовать стороннюю библиотеку PropTypes.
 */
// Теперь, если counter вдруг окажется строкой, увидим ошибку в панели разработчика:

 /*Но если какой-то props не обязательно передавать в компонент, 
    то можно задать значение по умолчанию (isRequired в таком случае нужно убрать):
 */
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
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

    handleNavigate = (link) => {
        this.props.push(link);
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
          // <Link key={ chatId } to={ `/chat/${chatId}` }>
               <ListItem
                   key={ chatId }
                   primaryText={ chats[chatId] .title }
                   leftIcon={ <ContentSend/> }
                   onClick={ () => this.handleNavigate('/chat/${chatId}') }
                   /> ));

                 //  </Link>));

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

/*Названия переменных mapStateToProps и mapDispatchToProps говорят 
сами за себя: благодаря им переменная chats из chatReducer и функция addChat, 
импортированная из chatActions, попадают в props компонента.

Важно! Нужно вызывать все Actions именно из props: например, this.props.addChat(), 
а не просто addChat(), так как последнее не приведет к изменению в Store.
Остается перестать передавать props из <Layout> в <ChatList> — и все готово!
 */
   const mapStateToProps = ({ chatReducer }) => ({
       chats: chatReducer.chats,
   });

   const mapDispatchToProps = dispatch => bindActionCreators ({ addChat, push}, dispatch);

   export default connect(mapStateToProps, mapDispatchToProps) (ChatList);


/*Чтобы перевести компонент <ChatList> на Redux, необходимы следующие изменения:
функция addChat() должна теперь поступать не из <Layout>, а из chatActions;
переменная chats должна быть получена из chatReducer, а не из <Layout>.
Все это делается с помощью специальной функции bindActionCreators() и декоратора connect().
 */
