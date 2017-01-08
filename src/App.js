import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FontIcon from 'material-ui/FontIcon';

import Paper from 'material-ui/Paper';

import SNSButtonList from './SNSButtonList';
import MessageList from './containers/MessageList';

import moment from 'moment';
moment.locale('ja');

import './App.css';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#0B666C",
        accent1Color: "#AA2353",
    },
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: false,
            signOutDialog: false,
            messages: []
        };

        /*
        setInterval(() => {
            this.setState({messages: this.state.messages});
        }, 500);
        */

    }

    auth() {
        if (this.props.user) {
            return <div onClick={this.props.onOpenSignOutDialog}>
                <Avatar src={this.props.user.photoURL} />
            </div>
        } else {
            return <FlatButton label="Sign In" onClick={this.props.onSignIn}/>;
        }
    }


    render() {
        const handleSignOutWithClose = () => {
            this.props.onCloseSignOutDialog();
            this.props.onSignOut();
        };
        const actions = [
            <FlatButton
                label="キャンセル"
                onClick={this.props.onCloseSignOutDialog}
            />,
            <FlatButton
                label="サインアウト"
                primary={true}
                keyboardFocused={true}
                onClick={handleSignOutWithClose}
            />,
        ];

        const userMessage = (() => {
            if (this.state.user === null) {
                return <Paper style={{margin: "10px", padding: "8px"}} zDepth={3}>
                    サインインすると挨拶ができます
                </Paper>
            } {
                return <div style={{"text-align": "center", margin: "10px"}}>
                    <RaisedButton label="挨拶をする" style={{width:200,margin: "auto", padding: "0"}} onClick={this.props.onClick} />
                </div>
            }
        })();

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar title="eiel.info" iconElementRight={this.auth()} iconElementLeft={<FontIcon className="fa" />} />

                    <SNSButtonList />

                    {userMessage}

                    <MessageList />

                    <Dialog
                        title="サインアウトしますか?"
                        actions={actions}
                        modal={true}
                        open={this.props.isOpenSignOutDialog}
                        onRequestClose={this.handleCloseSignOutDialog}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
