import { ADD_MESSAGE } from './actions'

const initialState = {
    messages: []
};

export default (state=initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            return {
                messages: action.messages
            };
        default:
            return state;
    }

}