import {
    FETCH_USER_DATA,
    SELECTED_USER_INFORMATION,
    SAVE_PROJECT,
    REMOVE_PROJECT
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

export function saveProject (role, projectOrder, projectId) {
    return {
        type: SAVE_PROJECT,
        role,
        projectOrder,
        projectId
    }
}

export function removeProject (role, projectOrder, projectId) {
    return {
        type: REMOVE_PROJECT,
        role,
        projectOrder,
        projectId
    }
}