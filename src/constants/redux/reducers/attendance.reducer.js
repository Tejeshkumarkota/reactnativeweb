import * as types from '../types';

const init_state = {
    attendance_data: null,
    loading: false,
    error: false,
    error_msg: "",
    //description : "" ,

};


const attendanceReducer = (state = init_state, action) => {
    switch (action.type) {
        case types.CHECK_ATTENDANCE_START: {
            return {
                ...state,
                attendance_data: null,
                loading: true,
                error: false,
                // description : "" ,
                error_msg: "",
            };
        }
        case types.CHECK_ATTENDANCE_SUCCESS: {
            return {
                ...state,
                loading: false,
                attendance_data: action.payload.data,
                //description : action.payload.description ,
                error: false,
                error_msg: ""
            };
        }
        case types.CHECK_ATTENDANCE_FAIL: {
            return {
                ...state,
                loading: false,
                attendance_data: null,
                error: true,
                //description : "" ,
                error_msg: action.payload.errorDescription,
            };
        }

    }
    return state;
};

export default attendanceReducer;
