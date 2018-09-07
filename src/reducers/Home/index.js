import _ from 'lodash';
import {
    FETCH_USER_DATA,
    SELECTED_USER_INFORMATION,
    SAVE_PROJECT,
    REMOVE_PROJECT
} from '../../constants/actionType';

import {projectArr} from '../../constants/staticData'

const initialState = {
    userOriginData: [],
    userData: [],
    userId: null,
    selectedUserName: '',
    wholeProjects: projectArr.map(project => {
        return {
            id: project.id,
            name: project.name,
            role: 'viewer',
            checked: false
        }
    }) || []
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);

    switch (action.type) {
        case FETCH_USER_DATA:
            newState.userOriginData = action.userData;
            newState.userData = action.userData.map(user => user.value);
            return newState;

        case SELECTED_USER_INFORMATION:
            newState.selectedUserName = action.selectedUserInfo;
            newState.userId = newState.userOriginData[action.userOrder].id;
            return newState;

        case SAVE_PROJECT:
            newState.wholeProjects[action.projectOrder].checked = true;
            newState.wholeProjects[action.projectOrder].role = action.role;
            return newState;

        case REMOVE_PROJECT:
            newState.wholeProjects[action.projectOrder].checked = false;
            newState.wholeProjects[action.projectOrder].role = action.role;
            return newState;

        default:
            return state;
    }
};

export default reducer;