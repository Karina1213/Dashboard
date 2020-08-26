import {
    GET_USER_BY_ID__SUCCESS,
    CREATE_THREAD__SUCCESS,
    GET_ALL_MESSAGES_SUCCESS,
    GET_ALL_THREADS_SUCCESS,
    GET_ALL_USERS_SUCCESS,
    SEND_MESSAGES_SUCCESS,
    GET_THREAD_ID,
} from "../../reducers/messageReducers";

export function getAllThreadsReceiveAction(allThreads) {
    return {
        type: GET_ALL_THREADS_SUCCESS,
        payload: allThreads
    };
}

export function getAllMessagesReceiveAction(allMessages) {
    return {
        type: GET_ALL_MESSAGES_SUCCESS,
        payload: allMessages
    };
}

export function sendMessagesReceiveAction(sendMessage) {
    return {
        type: SEND_MESSAGES_SUCCESS,
        payload:sendMessage
    };
}

export function getAllUsersReceiveAction(allUsers) {
    return {
        type: GET_ALL_USERS_SUCCESS,
        payload:allUsers
    };
}

export function createThreadReceiveAction(createThread) {
    return {
        type: CREATE_THREAD__SUCCESS,
        payload:createThread
    };
}

export function getUserByIdReceiveAction(userInfoById) {
    return {
        type: GET_USER_BY_ID__SUCCESS,
        payload:userInfoById
    };
}

export function getThreadIdAction(threadId) {
    return {
        type: GET_THREAD_ID,
        payload: threadId
    };
}
