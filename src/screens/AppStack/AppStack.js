import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsListing from './NewsListing/NewsListing';
import NewsDetails from './NewsDetails';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="NewsListing"
                component={NewsListing}
                options={{
                    animation: 'fade_from_bottom',
                }}
            />
            <Stack.Screen
                name="NewsDetails"
                component={NewsDetails}
                options={{
                    animation: 'fade',
                }}
            />
        </Stack.Navigator>
    );
};

export default AppStack;
