import AsyncStorage from '@react-native-async-storage/async-storage';
import { Action } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import ExpoFileSystemStorage from "redux-persist-expo-filesystem"
const API_URL = process.env.REACT_APP_API_URL
// ** Define API endPoints **/

export interface ActionWithPayload<T> extends Action {
    payload?: T
}

// ** Define Actions "ALL ACTIONS NAMES SHOULD BE UNIQUE!!!!" **

export const actionTypes = {
    GeneralData: '[GeneralData] Action',
}
// ** Define initialGeneralDatas **
const initialGeneralDatasState: IGeneralDatasState = {
    generalData: undefined,
}
export interface IGeneralDatasState {
    generalData?: ''
}
const persistConfig = {
    key: '@prcStore-21',
    storage: AsyncStorage
};
export const reducer = persistReducer(
    { storage, key: 'General', whitelist: ['building'] },

    (
        state: IGeneralDatasState = initialGeneralDatasState,
        action: ActionWithPayload<IGeneralDatasState>
    ) => {
        switch (action.type) {
            case actionTypes.GeneralData: {
                const generalData = action.payload?.generalData
                return { ...state, generalData: generalData }
            }
            default:
                return state
        }
    }
)

export const actions = {
    generalData: (generalData: any) => ({
        type: actionTypes.GeneralData,
        payload: { generalData },
    }),
}

export function* GeneralSaga() {
}
