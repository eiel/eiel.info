import { SET_MESSAGES, SET_USER } from './actions'

const initialState = {
    messages: []
};

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_MESSAGES:
            return {user: state.user, messages: action.messages};
        case SET_USER:
            return {user: action.user, messages: state.messages};
        default:
            return state;
    }

}