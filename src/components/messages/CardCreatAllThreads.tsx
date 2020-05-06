import React from "react"

const CardCreatAllThreads = (props: any) => {

    return (
        <div
            className='threads-card threads-card--hovered'
            data-thread-id={props._id}
            key={props._id}>
            <div className='threads-card__block'>
                <div className='threads-card__name'>
                    <i className='threads-card__img fa-user fa-2x fa'> </i>
                    <span>{props.users[0].name}</span>
                </div>
                <div className='threads-card__updated-at'>
                    {props.updated_at.slice(2, 10)}
                </div>
            </div>
        </div>
    );
};
export default CardCreatAllThreads;


