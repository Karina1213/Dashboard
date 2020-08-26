import axios from "axios";
import {isLoadingAction, authenticatedAction, authenticationErrorAction, logoutAction
} from "../authActionsCreators";

export function signUpAction(url, name, email, password) {
    return (dispatch) => {
        dispatch(isLoadingAction(true));

        axios.post(url, {name, email, password})
            .then((response) => {
                if (response.statusText !== 'Created') {
                     dispatch(logoutAction(true));
                    throw Error(response.statusText);
                } else {
                    dispatch(isLoadingAction(false));
                    dispatch(authenticatedAction(true));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    };
}
