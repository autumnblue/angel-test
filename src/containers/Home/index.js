import React, { Component } from 'react'
import { connect } from 'react-redux';
import Home from '../../components/HomeComponent'
import {
    fetchUser,
    selectedUserData,
    saveProject,
    removeProject
} from '../../actions/Home';

class HomeContainer extends Component {
    render () {
        return (
            <div className={'home-container'}>
                <Home {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userData: state.home.userData,
        wholeProjects: state.home.wholeProjects
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: (userData) => {
            dispatch(fetchUser(userData));
        },
        selectedUserData: (userName, index) => {
            dispatch(selectedUserData(userName, index));
        },
        saveProject: (role, order, id) => {
            dispatch(saveProject(role, order, id));
        },
        removeProject: (role, order, id) => {
            dispatch(removeProject(role, order, id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)