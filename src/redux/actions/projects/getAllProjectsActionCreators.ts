import {GET_ALL_PROJECTS_SUCCESS} from "../../reducers/projectsReducers";

export function getAllProjectsReceiveAction(allProjects) {
    return {
        type: GET_ALL_PROJECTS_SUCCESS,
        payload: allProjects
    };
}