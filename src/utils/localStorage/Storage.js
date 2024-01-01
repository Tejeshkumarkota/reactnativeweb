import AsyncStorage from '@react-native-async-storage/async-storage';

const CONSOLE_ALLOW = true
const LANG_CODE = "@Lang:Code"

export default class PrefManager {

    createLangCode = async (sessionData) => {
        try {
            await AsyncStorage.setItem(LANG_CODE, JSON.stringify(sessionData))
            if (CONSOLE_ALLOW) {
                console.log("Data Saved Suceessfully")
            }
        } catch (ex) {
            if (CONSOLE_ALLOW) {
                console.log("Data Saved ERROR ", ex.message)
            }
        }
    }

    getLangCode = async (onLoaded) => {
        let data = await AsyncStorage.getItem(LANG_CODE);
        let jData = data ? (data) : null
        onLoaded(jData)
    }

    destroySession = async () => {
        try {
            await AsyncStorage.multiRemove([LANG_CODE,])
            if (CONSOLE_ALLOW) {
                console.log("Data Saved Destroyed Sucessfully")
            }
        } catch (ex) {
            if (CONSOLE_ALLOW) {
                console.log("Data Saved Destroyed ERROR ", ex.message)
            }
        }
    }




}