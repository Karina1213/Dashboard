import React from "react"

const CardCreatMessages = (props: any) => {

    let renderMessageCard = () => {
            let locationMessagesCard;
            props.user._id === localStorage.getItem('currentUserId')
                ? locationMessagesCard = {flexDirection: "row"}
                : locationMessagesCard = {flexDirection: "row-reverse"};

            return <div className='messages-card' style={locationMessagesCard} key={props._id}>
                <div className='messages-card__block'>
                    <span className='messages-card__message'>{props.body}</span>
                    <span className='messages-card__time'>{props.created_at.slice(11, 16)}</span>
                </div>
                <div className='messages-card__photo'>
                    <i className='fa fa-user-secret fa-2x'> </i>
                </div>
            </div>
    };

    return (
        <> {renderMessageCard()}</>
    );
};

export default CardCreatMessages