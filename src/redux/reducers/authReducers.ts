export const AUTHENTICATED = "AUTHENTICATED";
export const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";
export const IS_LOADING = 'IS_LOADING';
export const LOGOUT = 'LOGOUT';
export const GET_CURRENT_USER_ID = 'GET_CURRENT_USER_ID'

export function authenticated(state = false, action: any) {
    switch (action.type) {
        case AUTHENTICATED:
            return action.authenticated;

        default:
            return state;
    }
}

export function authenticationError(state = false, action: any) {
    switch (action.type) {
        case AUTHENTICATION_ERROR:
            return action.authenticationError;

        default:
            return state;
    }
}

export function isLoading(state = false, action: any) {
    switch (action.type) {
        case IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function logout(state = false, action: any) {
    switch (action.type) {
        case LOGOUT:
            return action.logout;

        default:
            return state;
    }
}
export function currentUserId(state:any = [], action) {
    switch (action.type) {
        case GET_CURRENT_USER_ID:
            return  action.payload;

        default:
            return state;
    }
}