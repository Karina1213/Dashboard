import { authenticatedAction, authenticationErrorAction, isLoadingAction} from "../authActionsCreators";
import { getUserByIdReceiveAction} from "./messagesActionCreators";
import {MessagesService} from "../../services/messagesService";

export function getUserByIdAction(userById) {
    return (dispatch) => {
        dispatch(isLoadingAction(true));

       MessagesService.getUserById(userById)
            .then((response) => {
                    dispatch(isLoadingAction(false));
                    dispatch(authenticatedAction(true));
                    dispatch(getUserByIdReceiveAction(response.data));

            })
           .catch(error =>
               dispatch(authenticationErrorAction(error.response)))
    }
}