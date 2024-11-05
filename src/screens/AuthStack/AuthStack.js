import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ChangePassword from './ChangePassword';
import Login from './Login';
import SignUpOne from './SignUpOne';
import SignUpTwo from './SignUpTwo';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    animation: 'fade',
                }}
            />
            <Stack.Screen
                name="SignUpOne"
                component={SignUpOne}
                options={{
                    animation: 'fade_from_bottom',
                }}
            />
            <Stack.Screen
                name="SignUpTwo"
                component={SignUpTwo}
                options={{
                    animation: 'slide_from_right',
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
