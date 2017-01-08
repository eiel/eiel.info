import { SET_MESSAGES, SET_USER, SET_OPEN_SIGN_OUT_DIALOG } from './actions'

const initialState = {
    messages: []
};

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_MESSAGES:
            return Object.assign({}, state, {messages: action.messages});
        case SET_USER:
            return Object.assign({}, state, {user: action.user});
        case SET_OPEN_SIGN_OUT_DIALOG:
            return Object.assign({}, state, {isOpenSignOutDialog: action.value});
        default:
            return state;
    }

}