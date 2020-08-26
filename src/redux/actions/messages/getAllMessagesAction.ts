import {authenticatedAction, authenticationErrorAction, isLoadingAction} from "../authActionsCreators";
import {getAllMessagesReceiveAction} from "./messagesActionCreators";
import {MessagesService} from "../../services/messagesService";

export function getAllMessagesAction(threadId) {
    return (dispatch) => {
        dispatch(isLoadingAction(true));

        MessagesService.getAllMessages(threadId)
            .then((response) => {
                dispatch(isLoadingAction(false));
                dispatch(authenticatedAction(true));
                dispatch(getAllMessagesReceiveAction(response.data));
            })
            .catch(error =>
                dispatch(authenticationErrorAction(error.response)))
    }
}
