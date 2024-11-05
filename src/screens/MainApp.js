import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthenticationContext';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AppStack from '../../src/screens/AppStack/AppStack';
import AuthStack from '../../src/screens/AuthStack/AuthStack';

const InnerApp = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        // <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
            {isAuthenticated === true && <AppStack />}
            {isAuthenticated === false && <AuthStack />}
        </NavigationContainer>
        // </GestureHandlerRootView>
    );
};

export default InnerApp;
