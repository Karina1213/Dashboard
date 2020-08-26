import axios from "axios";
import {authenticatedAction, authenticationErrorAction} from "../authActionsCreators";
import {sendMessagesReceiveAction} from "./messagesActionCreators";
import store from "../../store/storeConfig";

export function sendMessagesAction(url, message) {
    return (dispatch) => {

        let threadId = store.getState().threadId;
        axios.post(url, {
            "thread": {
                "_id": threadId
            },
            "message": {
                "body": message
            }
        })
            .then((response) => {
                console.log(response);
                if (response.statusText !== 'OK') {
                    throw Error(response.statusText);
                } else {
                    dispatch(authenticatedAction(true));
                    dispatch(sendMessagesReceiveAction( response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    };
}
