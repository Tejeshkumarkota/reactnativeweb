import * as types from '../types';
import { endpoints, getFullUrl } from '../../utils';
import { services } from '../../services';


export const attendanceScreen = (data) => {
    return (dispatch) => {
        dispatch({
            type: types.CHECK_ATTENDANCE_START,
            payload: null,
        });
        services.secureGetWithoutParams(getFullUrl(endpoints.Attendance_Screen) + "?" + data)
            .then((res) => {
                console.log('SERVICE=========', res)
                if (res.code === 200 && res.errorCode == 0) {
                    dispatch({
                        type: types.CHECK_ATTENDANCE_SUCCESS,
                        payload: res,
                    });
                } else {
                    dispatch({
                        type: types.CHECK_ATTENDANCE_FAIL,
                        payload: res,
                    });
                }
            }).catch((e) => {
                console.log(e)
            })
    };
};