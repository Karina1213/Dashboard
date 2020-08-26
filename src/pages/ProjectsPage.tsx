import React, {Component} from 'react'
import '../assets/styles/messages/messages.css'
import axios from 'axios'
import {connect} from 'react-redux'
import CardCreatProject from '../components/projects/CardCreatProject';
import Loading from '../components/projects/Loading';
import {getAllProjectsAction} from '../redux/actions/projects/getAllProjectsActions';

interface IProps {
    getAllProjectsAction?: any,
    allProjects?: any,
    isLoading?: boolean,
}

class ProjectsPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getAllProjectsAction(`${axios.defaults.baseURL}/api/projects/`);
    };

    render() {
        let project = this.props.allProjects.map((project: any) =>
            <CardCreatProject{...project} key={project._id}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{project}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        allProjects: state.allProjects,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllProjectsAction: (url: string) => dispatch(getAllProjectsAction(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);


