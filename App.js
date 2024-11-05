import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthenticationContext from './src/contexts/AuthenticationContext';
import MainApp from './src/screens/MainApp';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? 'black' : 'white'}
            />
            <AuthenticationContext>
                <MainApp />
            </AuthenticationContext>
        </SafeAreaProvider>
    );
};

export default App;
