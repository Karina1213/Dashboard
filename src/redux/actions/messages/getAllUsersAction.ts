import axios from "axios";
import '../../services/axiosConfig'
import {logoutAction, authenticatedAction, authenticationErrorAction, isLoadingAction} from "../authActionsCreators";
import {getAllUsersReceiveAction} from "./messagesActionCreators";

export function getAllUsersAction(url) {
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
                    dispatch(getAllUsersReceiveAction(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    }
}