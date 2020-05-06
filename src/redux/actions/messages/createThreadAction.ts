import axios from "axios";
import { authenticatedAction, authenticationErrorAction} from "../authActionsCreators";
import {createThreadReceiveAction} from "./messagesActionCreators";

export function createThreadAction(url, userId) {
    return (dispatch) => {

        axios.post(url, {
            "user": {
                "_id": userId
            }
        })
            .then((response) => {
                if (response.statusText !== 'OK') {
                    throw Error(response.statusText);
                } else {
                    dispatch(authenticatedAction(true));
                    dispatch(createThreadReceiveAction(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    };
}
