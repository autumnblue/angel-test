import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layouts from './config/Layout';

class AppContainer extends Component {
    render () {
        return (
            <MuiThemeProvider>
                <Layouts />
            </MuiThemeProvider>
        )
    }
}

export default AppContainer;