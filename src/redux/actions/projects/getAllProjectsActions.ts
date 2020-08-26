import axios from "axios";
import {logoutAction, isLoadingAction, authenticatedAction, authenticationErrorAction} from "../authActionsCreators";
import { getAllProjectsReceiveAction} from "./getAllProjectsActionCreators";

export function getAllProjectsAction(url) {
    return (dispatch) => {
        dispatch(isLoadingAction(true));

            axios.get(url)
                .then((response) => {
                    if (response.statusText !== 'OK') {
                        dispatch(logoutAction(true));
                        throw Error(response.statusText);
                    } else {
                        dispatch(isLoadingAction(false));
                        dispatch(authenticatedAction(true));
                        dispatch(getAllProjectsReceiveAction(response.data))
                    }
                })
                .catch(() =>
                    dispatch(authenticationErrorAction(true)))

    }
}
