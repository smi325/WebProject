import { ACTION_TYPES } from '../../../../../lib/Constants'

import service from '../../../../../services/DirectoryService'

const {
    CLEAR_APPOINTMENT_STATUS_LIST,
    CLEAR_APPOINTMENT_STATUS_LIST_ERROR,
    LOAD_APPOINTMENT_STATUS_LIST_REQUEST,
    LOAD_APPOINTMENT_STATUS_LIST_SUCCESS,
    LOAD_APPOINTMENT_STATUS_LIST_FAILURE
} = ACTION_TYPES

export function clear () {
    return { type: CLEAR_APPOINTMENT_STATUS_LIST }
}

export function clearError () {
    return { type: CLEAR_APPOINTMENT_STATUS_LIST_ERROR }
}

export function load () {
    return dispatch => {
        dispatch({ type: LOAD_APPOINTMENT_STATUS_LIST_REQUEST })
        return service.findAppointmentStatuses().then(response => {
            dispatch({
                type: LOAD_APPOINTMENT_STATUS_LIST_SUCCESS,
                payload: { data: response.data }
            })

            return response
        }).catch(e => {
            dispatch({ type: LOAD_APPOINTMENT_STATUS_LIST_FAILURE, payload: e })
        })
    }
}

