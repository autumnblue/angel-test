import React, { Component } from 'react'
import { connect } from 'react-redux';
import Home from '../../components/HomeComponent'

class HomeContainer extends Component {
    render () {
        return (
            <div className={'home-container'}>
                <Home {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = () => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)