import { combineReducers } from 'redux'
import { SET_MESSAGES, SET_USER, SET_OPEN_SIGN_OUT_DIALOG, SET_NOW } from './actions'

function messages (state=[], action) {
    switch(action.type) {
        case SET_MESSAGES:
            return action.messages;
        default:
            return state;
    }
}

function user(state=null, action) {
    switch(action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}

function isOpenSignOutDialog (state=false, action) {
    switch(action.type) {
        case SET_OPEN_SIGN_OUT_DIALOG:
            return action.value;
        default:
            return state;
    }
}

function time(state=0, action) {
    switch(action.type) {
        case SET_NOW:
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({messages, user, isOpenSignOutDialog, time})
