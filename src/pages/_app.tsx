import 'raf/polyfill';
import '@tamagui/core/reset.css';
import '@tamagui/font-silkscreen/css/400.css';
import '@tamagui/font-inter/css/400.css';
import '@tamagui/font-inter/css/700.css';
import '@tamagui/font-inter/css/800.css';
import '@tamagui/font-inter/css/900.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import config from '../../tamagui';
import { PersistGate } from 'redux-persist/integration/react'
import { ICTi18nProvider } from '../setup/i18n/i18n'
import { Provider } from 'react-redux'
import * as _redux from '../constants'
import store, { persistor } from '../constants/redux/Store'
import axios from 'axios'
import { I18nProvider } from '../setup/i18n/i18nProvider'
const insets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const frame = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};
// _redux.setupAxios(axios, store)
const initialMetrics = { insets, frame };

const Providers = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useRootTheme();

  return (
    <NextThemeProvider onChangeTheme={setTheme}>
      <I18nProvider>
        <ICTi18nProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <TamaguiProvider
                config={config}
                disableInjectCSS
                disableRootThemeClass
                defaultTheme={theme}>
                <SafeAreaProvider
                  initialMetrics={initialMetrics} //https://github.com/th3rdwave/react-native-safe-area-context#web-ssr
                >
                  <GestureHandlerRootView style={styles.container}>
                    {children}
                  </GestureHandlerRootView>
                </SafeAreaProvider>
              </TamaguiProvider>
            </PersistGate>
          </Provider>
        </ICTi18nProvider>
      </I18nProvider>
    </NextThemeProvider>
  );
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  return (
    <div>
      <Head>
        <title>RealCube</title>
        <meta name="description" content="Real Cube" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="./favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="./favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
        <link rel="manifest" href="./favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="./favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <script
        key="tamagui-animations-mount"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: "document.documentElement.classList.add('t_unmounted')",
        }}
      />
      <Providers>{contents}</Providers>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
