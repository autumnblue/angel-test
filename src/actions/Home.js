import {
    FETCH_USER_DATA,
    SELECTED_USER_INFORMATION
} from '../constants/actionType'

export function fetchUser (userData) {
    return {
        type: FETCH_USER_DATA,
        userData
    }
}

export function selectedUserData (selectedUserInfo, userOrder) {
    return {
        type: SELECTED_USER_INFORMATION,
        selectedUserInfo,
        userOrder
    }
}