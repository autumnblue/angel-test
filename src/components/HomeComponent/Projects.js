import React, { Component } from 'react'
import {ProjectCard} from './ProjectCard'
import RoleSelect from './Role';
import {projects} from '../../constants/staticData'

class ProjectsSelect extends Component {
    constructor (props) {
        super(props)

        this.state = {
            open: false,
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render () {
        const {open} = this.state;

        return (
            <div className={'project-step'}>
                <div className={'project-card-part'}>
                    {
                        projects.map((card, i) => <ProjectCard key={i} id={card.id} title={card.name} handleOpen={this.handleOpen} />)
                    }
                    <RoleSelect
                        open={open}
                        handleClose={this.handleClose}
                    />
                </div>
            </div>
        )
    }
}

export default ProjectsSelect;