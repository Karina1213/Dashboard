export const GET_ALL_THREADS_SUCCESS = 'GET_ALL_THREADS_SUCCESS';
export const GET_ALL_MESSAGES_SUCCESS = 'GET_ALL_MESSAGES_SUCCESS';
export const SEND_MESSAGES_SUCCESS = 'SEND_MESSAGES_SUCCESS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const CREATE_THREAD__SUCCESS = 'CREATE_THREAD__SUCCESS';
export const GET_USER_BY_ID__SUCCESS = 'GET_USER_BY_ID__SUCCESS'
export const GET_THREAD_ID = 'GET_THREAD_ID';

export function allThreads(state: any = [], action) {
    switch (action.type) {
        case GET_ALL_THREADS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export function allMessages(state:any = [], action) {
    switch (action.type) {
        case GET_ALL_MESSAGES_SUCCESS:
            return  action.payload;

        default:
            return state;
    }
}
export function sendMessage(state:any = [], action) {
    switch (action.type) {
        case SEND_MESSAGES_SUCCESS:
            return  action.sendMessage;

        default:
            return state;
    }
}
export function allUsers(state:any = [], action) {
    switch (action.type) {
        case GET_ALL_USERS_SUCCESS:
            return  action.payload;

        default:
            return state;
    }
}

export function createThread(state:any = [], action) {
    switch (action.type) {
        case CREATE_THREAD__SUCCESS:
            return  action.payload;

        default:
            return state;
    }
}

export function userInfoById(state:any = [], action) {
    switch (action.type) {
        case GET_USER_BY_ID__SUCCESS:
            return  action.payload;

        default:
            return state;
    }
}
export function threadId(state:any = [], action) {
    switch (action.type) {
        case  GET_THREAD_ID:
            return  action.payload;

        default:
            return state;
    }
}
