import React, {Component} from 'react'
import axios from 'axios';
import {Button} from '../common/Button';
import {TitleInput} from './TitleInput';
import {CompanyInput} from './CompanyInput';
import {CostInput} from './CostInput';
import {DeadlineInput} from './DeadlineInput';
import {AssignedInput} from './AssignedInput';

interface IState {
    createProject?: any,
    title?: string,
    company?: string,
    cost?: string,
    deadline?: string,
    assigned?: string,
}

interface IProps {
    title?: string,
    company?: string,
    cost?:string,
    deadline?: string,
    assigned?: string,
}

export default class CreateNewProjectContainer extends Component <IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            createProject: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: {
        target: {
            name: string;
            value: string;
        };
    }) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    createNewProject() {
        localStorage.getItem('token');
        axios({
            method: 'post',
            url: `${axios.defaults.baseURL}/api/projects/`,
            data: {
                title: this.state.title,
                company: this.state.company,
                cost: this.state.cost,
                deadline: this.state.deadline,
                assigned: this.state.assigned,
            },
            headers: {
                'x-access-token': localStorage.token,
            }
        })
            .then(response => response.data)
            .then((data: object) => {
                this.setState({
                    createProject: data,
                });
            })
            .catch((error: string) => {
                console.error(error);
            });
    }

    handleSubmit(event: {
        preventDefault: () => void;
    }) {
        event.preventDefault();
        this.createNewProject();
    }

    render() {
        return (
            <div className={'modal__form-block'}>
                <form className={'createProjectForm'}
                      key={this.state.assigned}
                      onSubmit={this.handleSubmit}>

                    <label className='createProjectForm__item'>
                        <span className='createProjectForm__title'>
                            Title
                        </span>
                        <TitleInput value={this.state.title}
                                    name = 'titleInput'
                                    onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                        <span className='createProjectForm__title'>
                            Company
                        </span>
                        <CompanyInput value={this.state.company}
                                      name = 'companyInput'
                                      onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                        <span className='createProjectForm__title'>
                            Cost
                        </span>
                        <CostInput value={this.state.cost}
                                   name='cost'
                                   onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                        <span className='createProjectForm__title'>
                            Deadline
                        </span>
                        <DeadlineInput value={this.state.deadline}
                                       name='deadline'
                                       onChange={this.handleChange}/>
                    </label>

                    <label className='createProjectForm__item'>
                        <span className='createProjectForm__title'>
                            Assigned
                        </span>
                        <AssignedInput value={this.state.assigned}
                                       name = 'assignedInput'
                                       onChange={this.handleChange}/>
                    </label>

                    <Button type='submit'>
                        OK
                    </Button>
                </form>
            </div>
        )
    }
}


