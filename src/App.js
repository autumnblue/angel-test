import React, { Component } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// whole structure including header, footer and routers
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