import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

class ProjectsSelect extends Component {

    render () {
        const {wholeProjects} = this.props;

        return (
            <div className={'project-step'}>
                <div className={'project-card-part'}>
                    {
                        wholeProjects.map((card, i) =>
                            <ProjectCard
                                key={i}
                                id={card.id}
                                title={card.name}
                                checked={card.checked}
                                role={card.role}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProjectsSelect;