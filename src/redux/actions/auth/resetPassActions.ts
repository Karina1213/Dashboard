import axios from "axios";
import {logoutAction, authenticatedAction, authenticationErrorAction} from "../authActionsCreators";

export function resetPassAction(url, email, password, confirmationPassword) {
    return (dispatch) => {

        axios.post(url, {email, password, confirmationPassword})
            .then((response) => {
                if (response.statusText !== 'OK') {
                    dispatch(logoutAction(true));
                    throw Error(response.statusText);
                } else {
                    dispatch(authenticatedAction(true));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    };
}
