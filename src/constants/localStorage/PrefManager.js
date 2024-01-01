import AsyncStorage from '@react-native-async-storage/async-storage';

const CONSOLE_ALLOW = true
const USER_SESSION_DATA_KEY = "@Session:UserData"

export default class PrefManager {

    createUserSession = async (sessionData) => {
        try {
            await AsyncStorage.setItem(USER_SESSION_DATA_KEY, JSON.stringify(sessionData))
            if (CONSOLE_ALLOW) {
                console.log("User Session Data Saved Suceessfully")
            }
        } catch (ex) {
            if (CONSOLE_ALLOW) {
                console.log("User Session Data Saved ERROR ", ex.message)
            }
        }
    }

    getUserSessionData = async (onLoaded) => {
        let data = await AsyncStorage.getItem(USER_SESSION_DATA_KEY);
        let jData = data ? JSON.parse(data) : null
        onLoaded(jData)
    }

    destroySession = async () => {
        try {
            await AsyncStorage.multiRemove([USER_SESSION_DATA_KEY,])
            if (CONSOLE_ALLOW) {
                console.log("User Session Data Saved Destroyed Sucessfully")
            }
        } catch (ex) {
            if (CONSOLE_ALLOW) {
                console.log("User Session Data Saved Destroyed ERROR ", ex.message)
            }
        }
    }




}