import {
	createDrawerNavigator, DrawerHeaderProps, DrawerNavigationOptions, DrawerToggleButton
} from '@react-navigation/drawer';
import {
	DarkTheme, DefaultTheme,
	NavigationContainer
} from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
	initialWindowMetrics,
	SafeAreaProvider,
	SafeAreaView
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SolitoImageProvider } from 'solito/image';
import { Button, H4, Stack, TamaguiProvider, useTheme } from 'tamagui';
import config from '../tamagui';
import { Logo } from './components/Logo';
import store, { persistor } from './constants/redux/Store';
import { UserDetailScreen } from './features/DetailScreen';
import { Home } from './features/Home';
import { List } from './features/List';
import i18n from './setup/i18n/i18/i18n';
import { ICTi18nProvider } from './setup/i18n/i18n';
import { I18nProvider } from './setup/i18n/i18nProvider';
import PrefManager from './utils/localStorage/Storage';
const Drawer = createDrawerNavigator();

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
const prefManager = new PrefManager();
const Header = ({ route }: DrawerHeaderProps) => {
	const { t, i18n }: any = useTranslation()
	const [first, setfirst] = useState('')
	const [currentLang, setcurrentLang] = useState<any>('en')
	const theme = useTheme();
	const toggleMenu = (lan: any) => {
		setcurrentLang(lan)
		prefManager.createLangCode(lan)
	}

	useEffect(() => {
		prefManager.getLangCode((data: any) => {
			console.log('%cMyProject%cline:57%cdata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', data)
			console.log("🚀 ~ file: App.tsx:58 ~ prefManager.getLangCode ~ data:", data)

		});
	}, [currentLang]);
	useEffect(() => {
		// document.body.dir = currentLanguage.dir || 'ltr';
		// document.title = t('app_title')
		i18n.changeLanguage(currentLang)
	}, [currentLang]);
	return (

		<SafeAreaView style={styles.headerContainer}>
			<DrawerToggleButton tintColor={theme.color?.val} />
			<Stack ai="center" jc={'space-between'} fd={'row'} f={1}>
				<Logo />
				<Button
					onPress={(e) => toggleMenu('en')}
				>
					{'English'}</Button>
				<Button
					onPress={(e) => toggleMenu('ar')}
				>
					{'Arabic'}</Button>
				<H4 fontFamily={'$silkscreen'} pr={'$7'}>
					{route.name.toUpperCase()}
				</H4>
			</Stack>
		</SafeAreaView>
	);
};

const screenOptions: DrawerNavigationOptions = {
	header: props => <Header {...props} />,
};

const TopTabNavigator = () => {
	return (
		<Drawer.Navigator initialRouteName="home" screenOptions={screenOptions}>
			<Drawer.Screen
				component={Home}
				key={'home'}
				name={'home'}
				options={{ title: 'Home' }}
			/>
			<Drawer.Screen
				name="user-detail"
				component={UserDetailScreen}
				options={{
					title: 'User',
				}}
			/>
			<Drawer.Screen
				name="Details"
				component={List}
				options={{
					title: 'List',
				}}
			/>
		</Drawer.Navigator>
	);
};

const linking = {
	prefixes: ['deeplink://'],
	config: {
		screens: {
			home: '',
			'user-detail': 'user/:id',
			list: 'list',
			'Details': 'lists/:id',
		},
	},
};

const InnerApp = () => {
	const colorScheme = useColorScheme() || 'light';
	const isDarkMode = colorScheme === 'dark';
	const theme = useTheme();

	return (
		<I18nextProvider i18n={i18n}>
			<I18nProvider>
				<ICTi18nProvider>
					<Provider store={store}>
						<PersistGate persistor={persistor}>
							<SafeAreaProvider initialMetrics={initialWindowMetrics}>
								<GestureHandlerRootView style={styles.container}>
									<StatusBar
										backgroundColor={theme.borderColor?.val}
										barStyle={isDarkMode ? 'light-content' : 'dark-content'}
									/>
									<NavigationContainer
										theme={isDarkMode ? DarkTheme : DefaultTheme}
										linking={linking}>
										<TopTabNavigator />
									</NavigationContainer>
								</GestureHandlerRootView>
							</SafeAreaProvider>
						</PersistGate>
					</Provider>
				</ICTi18nProvider>
			</I18nProvider>
		</I18nextProvider>
	);
};

const App = () => {
	const theme = useColorScheme() || 'light';
	return (

		<SolitoImageProvider nextJsURL="https://luna-gamma.vercel.app/">
			<TamaguiProvider config={config} disableInjectCSS defaultTheme={theme}>
				<InnerApp />
			</TamaguiProvider>
		</SolitoImageProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		flex: 1,
	},
	logoContainer: {
		flex: 1,
		height: 50,
		width: 50,
	},
	routeName: {
		flex: 1,
		textAlign: 'right',
		marginRight: 15,
	},
});

export default App;
