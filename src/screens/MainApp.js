import { NavigationContainer } from '@react-navigation/native';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppStack from '../../src/screens/AppStack/AppStack';
import AuthStack from '../../src/screens/AuthStack/AuthStack';
import { useSelector } from 'react-redux';

const MainApp = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        // <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
            {isAuthenticated === true && <AppStack />}
            {isAuthenticated === false && <AuthStack />}
        </NavigationContainer>
        // </GestureHandlerRootView>
    );
};

export default MainApp;
