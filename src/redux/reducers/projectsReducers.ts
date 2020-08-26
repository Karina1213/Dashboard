export const GET_ALL_PROJECTS_SUCCESS = 'GET_ALL_PROJECTS_SUCCESS';

export function allProjects(state:any = [], action) {
    switch (action.type) {
        case GET_ALL_PROJECTS_SUCCESS:
            return  action.payload;

        default:
            return state;
    }
}

