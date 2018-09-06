import _ from 'lodash';
import {
    FETCH_USER_DATA,
    SELECTED_USER_INFORMATION
} from '../../constants/actionType';

const initialState = {
    userOriginData: [],
    userData: [],
    userId: null,
    selectedUserName: '',
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

        default:
            return state;
    }
};

export default reducer;