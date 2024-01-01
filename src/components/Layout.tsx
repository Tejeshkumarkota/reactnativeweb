import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AnimatePresence, Button,
  isClient,
  Paragraph,
  XStack,
  YStack
} from 'tamagui';
import { setLanguage, useLang } from '../setup/i18n/i18n';
import PrefManager from '../utils/localStorage/Storage';
import { Logo } from './Logo';

import { globalStyles } from './styles/GlobalStyle';
interface ILayout {
  children: ReactNode;
}
const prefManager = new PrefManager();
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'ar',
  },
]
export const Layout = ({ children }: ILayout) => {
  const { t, i18n }: any = useTranslation()

  const lang = useLang()
  const [currentLang, setcurrentLang] = useState<any>('en')
  const currentLanguage: any = languages.find((x) => x.code === lang)
  // console.log("🚀 ~ file: Layout.tsx:34 ~ Layout ~ currentLanguage:", currentLanguage)
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr';
    // document.title = t('app_title')
  }, [currentLanguage]);
  useEffect(() => {
    prefManager.getLangCode((data: any) => {
      console.log('%cMyProject%cline:57%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', data)
      console.log("🚀 ~ file: App.tsx:58 ~ prefManager.getLangCode ~ data:", data)
      if (data != undefined) {
        setcurrentLang(data)
      } else {
        setcurrentLang('en')
      }

    });
  }, [, currentLang]);
  const [openMenu, setOpenMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  // const toggleMenu = () => setOpenMenu(x => !x);
  const toggleMenu = (lan: any) => setcurrentLang(currentLang == 'en' ? "ar" : "en");

  useEffect(() => {
    if (isClient) {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);
  // useEffect(() => {
  //   // document.body.dir = currentLanguage.dir || 'ltr';
  //   // document.title = t('app_title')
  //   i18n?.changeLanguage(currentLang)
  // }, [currentLang]);
  return (
    <YStack f={1}>
      <AnimatePresence>
        {openMenu && (
          <YStack
            key={'drawer-menu'}
            onPress={toggleMenu}
            position={'absolute'}
            backgroundColor={'$background'}
            width={'75%'}
            height={'100%'}
            animation={'slow'}
            x={0}
            exitStyle={{ x: -1000 }}
            enterStyle={{ x: -1000 }}
            zi={5000}>
            <Paragraph minWidth={200} bbc={'$borderColor'}>
              Drawer menu
            </Paragraph>
          </YStack>
        )}
      </AnimatePresence>
      <XStack
        elevation={isScrolled ? 0 : '$1'}
        py={isScrolled ? '$2' : '$2'}
        my={isScrolled ? -2 : 0}
        bbc="$borderColor"
        // space={5}
        flex={1}
        alignItems="center"
        justifyContent="space-between"
        className='topnavbar w-100'
        $xs={{
          px: '$0',
          py: '$0'
        }}
        $gtXs={{
          px: '$0'
        }}
        $sm={{
          px: '$3'
        }}
        $gtSm={{
          px: '$10'
        }}
        $gtLg={{
          px: '$10'
        }}
        $gtXxxl={{
          px: '$12'
        }}
        $gtXl={{
          px: '$15'
        }}
        style={globalStyles.topnavbar}
      // paddingHorizontal="$13"
      >
        {/* <YStack>
          <Button
            aria-label={'drawer-menu-button'}
            size="$5"
            $md={{ size: '$3' }}
            $gtMd={{ display: 'none' }}
            icon={Menu}
            alignSelf="center"
            space={2}
            scaleIcon={1.5}
            hoverStyle={{ scale: 1.1 }}
            animation={'quick'}
            onPress={toggleMenu}
          />
        </YStack> */}
        <YStack px="$0">
          <Logo />
        </YStack>
        <YStack>
          <Button
            px="$2"
            py="$1"
            style={globalStyles.arabicbutton}
            onClick={() => {
              // setcurrentLang(currentLang == 'en' ? "ar" : "en")
              setLanguage(currentLanguage.dir ? "en" : "ar")
            }}
          >
            {currentLang == 'ar' ? 'English' : 'عربی'}</Button>
        </YStack>
      </XStack>
      {/* <YStack height={54} w="100%" /> */}
      {children}
    </YStack>
  );
};
