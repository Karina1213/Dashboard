import axios from 'axios';

export class MessagesService {
    static get threadsUrl() {
        return '/api/threads'
    }

    static getAllThreads() {
        return axios.get(axios.defaults.baseURL + this.threadsUrl);
    }

    static getAllMessages(threadId) {
        return axios.get(axios.defaults.baseURL + `/api/threads/messages/${threadId}`);
    }

    static getUserById(userById) {
        return axios.get(`${axios.defaults.baseURL}/api/users/${userById}`);
    }
}
