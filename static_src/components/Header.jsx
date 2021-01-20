import React from 'react';
import PropTypes from "prop-types";

import '../styles/Header.css';

export default class Header extends React.Component {

 

    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };
 
    render() {
        return (
            <div className="Header">
                <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
            </div>
        )
    }
 }
 
