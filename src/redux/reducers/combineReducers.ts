import {combineReducers} from 'redux';
import {logout, authenticated, authenticationError, isLoading} from "./authReducers";
import {allProjects} from "./projectsReducers";
import {
    allMessages,
    allThreads,
    allUsers,
    createThread,
    sendMessage,
    threadId,
    userInfoById
} from "./messageReducers";

const rootReducers = combineReducers({
    logout,
    authenticated,
    authenticationError,
    isLoading,
    allProjects,
    allThreads,
    allMessages,
    sendMessage,
    allUsers,
    createThread,
    userInfoById,
    threadId,
});
export default rootReducers;