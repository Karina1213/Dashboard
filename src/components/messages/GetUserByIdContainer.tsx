import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from '../projects/Loading';
import CardCreatUserInfo from './CardCreateUserInfo';


interface IProps {
    userInfoById?: any,
    isLoading?: boolean,
}

class GetUserByIdContainer extends Component <IProps, {}> {

    render() {
        return (
            <>
                {this.props.isLoading ? <Loading/> : <CardCreatUserInfo userInfo={this.props.userInfoById}/>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userInfoById: state.userInfoById,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, null)(GetUserByIdContainer);