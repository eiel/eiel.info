// action types
export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_USER = 'SET_USER';
export const SET_OPEN_SIGN_OUT_DIALOG = 'SET_OPEN_SIGN_OUT_DIALOG';

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

export function setOpenSignOutDailog(bool) {
    return {
        type: SET_OPEN_SIGN_OUT_DIALOG, value: bool
    }
}