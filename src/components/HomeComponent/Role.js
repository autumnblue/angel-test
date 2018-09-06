import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
};

class RoleSelect extends React.Component {
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.handleClose}
            />,
            <RaisedButton
                label="Submit"
                primary={true}
                onClick={this.props.handleClose}
            />,
        ];

        const {open} = this.props;

        return (
            <div>
                <Dialog
                    title="Select the Role"
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={this.props.handleClose}
                >
                    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                        <RadioButton
                            value="admin"
                            label="Admin"
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="editor"
                            label="Editor"
                            style={styles.radioButton}
                        />
                        <RadioButton
                            value="viewer"
                            label="Viewer"
                            style={styles.radioButton}
                        />
                    </RadioButtonGroup>
                </Dialog>
            </div>
        );
    }
}

export default RoleSelect;