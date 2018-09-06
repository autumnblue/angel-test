import React, { Component } from 'react';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {UsersSelect} from './Users';
import ProjectsSelect from './Projects';

import './index.css'


const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '0 16px'
};

class HomePage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            finished: false,
            stepIndex: 0,
        }
    }

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 1,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <UsersSelect userData={this.props.userData} fetchUser={this.props.fetchUser} selectedUserData={this.props.selectedUserData} />;
            case 1:
                return <ProjectsSelect />;
            default:
                return 'Steps were completed. Please go back';
        }
    }

    render () {
        const {finished, stepIndex} = this.state;

        return (
            <div className={'home-page'}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>User Part</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Project part</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}
                            >
                                Click here
                            </a> to reset the example.
                        </p>
                    ) : (
                        <div>
                            <div>{this.getStepContent(stepIndex)}</div>
                            <div style={{marginTop: 12}}>
                                <FlatButton
                                    label="Back"
                                    disabled={stepIndex === 0}
                                    onClick={this.handlePrev}
                                    style={{marginRight: 12}}
                                />
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                                    primary={true}
                                    onClick={this.handleNext}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default HomePage;