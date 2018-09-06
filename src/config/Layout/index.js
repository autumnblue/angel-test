import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from '../router';

class LayoutsContainer extends Component {
    render () {
        return (
            <BrowserRouter>
                <RouterComponent />
            </BrowserRouter>
        )
    }
}

export default LayoutsContainer;