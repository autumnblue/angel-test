import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card';

export const ProjectCard = ({title, id, handleOpen}) => {
    return (
        <div onClick={() => handleOpen(id)}>
            <Card>
                <CardHeader
                    title={title}
                    actAsExpander={true}
                />
                <CardText>

                </CardText>
            </Card>
        </div>
    )
};