import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthenticationWrapper from './src/wrappers/AuthenticationWrapper';
import MainApp from './src/screens/MainApp';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import codePush from 'react-native-code-push';

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={isDarkMode ? 'black' : 'white'}
                />
                <AuthenticationWrapper>
                    <MainApp />
                </AuthenticationWrapper>
            </SafeAreaProvider>
        </Provider>
    );
};

const codePushOpions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOpions)(App);
