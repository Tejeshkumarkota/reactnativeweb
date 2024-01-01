import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import attendanceReducer from './reducers/attendance.reducer';
export const rootReducer = combineReducers({
    // General: General.reducer,
    attendance: attendanceReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
    yield all([
    ])
}
