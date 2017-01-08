// action types
export const ADD_MESSAGE = 'ADD_MESSAGE';

// action creators
export function addMessage(message) {
    return {
        type: ADD_MESSAGE, messages: message
    }
}