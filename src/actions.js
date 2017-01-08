// action types
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_USER = 'SET_USER';

// action creators
export function setMessages(messages) {
    return {
        type: SET_MESSAGES, messages
    }
}

export function setUser(user) {
    return {
        type: SET_USER, user
    }
}