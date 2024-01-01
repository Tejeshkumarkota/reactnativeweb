import { createContext, FC, useContext } from 'react';
import { Platform } from 'react-native';
import PrefManager from '../../utils/localStorage/Storage';
import { WithChildren } from './react18MigrationHelpers';
const prefManager = new PrefManager()

const I18N_CONFIG_KEY = '@Lang:Code'

type Props = {
  selectedLang: 'de' | 'en' | 'es' | 'fr' | 'ja' | 'zh' | 'ar'
}
const initialState: Props = {
  selectedLang: 'en',
}

function getConfig(): Props {

  const ls = typeof window !== "undefined" && window.localStorage?.getItem(I18N_CONFIG_KEY)
  // const ls: any = typeof window !== "undefined" && prefManager?.getLangCode() 

  if (ls) {
    try {
      return JSON.parse(ls) as Props
    } catch (er) {
      console.error(er)
    }
  }
  return initialState
}
const getData = async () => {
  try {
    const value = await prefManager?.getLangCode()
    console.log("🚀 ~ file: i18n.tsx:26 ~ getData ~ value:", value)
    return value// useContext(I18nContext).selectedLang
    if (value !== null) {
      // value previously stored

    }
  } catch (e) {
    // error reading value
  }
}
// Side effect
export function setLanguage(lang: string) {
  window.localStorage?.setItem(I18N_CONFIG_KEY, JSON.stringify({ selectedLang: lang }))
  // prefManager?.createLangCode(JSON.stringify({ selectedLang: lang }))
  // window.location.reload()
  Platform.OS === 'web' && window?.location?.reload()
}
const ls = typeof window !== "undefined" && typeof window != null ? window.localStorage?.getItem(I18N_CONFIG_KEY) : initialState
const finalVaule: any = typeof window !== "undefined" && typeof window != null && ls != null ? JSON.parse(ls as any) as Props : initialState
const I18nContext = createContext<Props>(finalVaule)

const useLang = () => {
  return useContext(I18nContext).selectedLang
}

const ICTi18nProvider: FC<WithChildren> = ({ children }) => {
  const lang = getConfig()
  return <I18nContext.Provider value={lang}>{children}</I18nContext.Provider>
}

export { ICTi18nProvider, useLang };

