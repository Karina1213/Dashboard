import React from 'react'
import {Line} from 'rc-progress';

const CardCreatProject = (props: any) => {

    return (
        <div className='project-container' key={props._id}>
            <div className='project-container__item'>
                {props.title}
                <p className='project-container__subparagraph'>
                    {props.company}
                </p>
            </div>
            <div className='project-container__item'>
                {props.cost}
            </div>
            <div className='project-container__item'>
                {props.deadline.slice(2, 10)}
            </div>
            <div className='project-container__item'>
                {props.progress} %
                <Line percent={props.progress} strokeColor={getProgressColor(props)}/>
            </div>
            <div className='project-container__item'>
                {props.status}
            </div>
            <div className='project-container__item'>
                <div className='project-container__assigned'>
                    <div>
                        <i className='fa fa-user-secret fa-assigned fa-2x'>
                        </i>
                    </div>
                    <div>
                        {props.assigned ? props.assigned.name : 'Djon'}
                        <p className={'project-container__subparagraph'}>
                            {props.assigned ? props.assigned.position : 'Frontend Developer'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

function getProgressColor(props: any) {
    if (props.progresss > 0 && props.progress < 100) {
        return '#2196f3'
    }
    if (props.progress === 0) {
        return '#D3D3D3'
    } else if (props.progress === 100) {
        return '#4caf50'
    }
}

export default CardCreatProject