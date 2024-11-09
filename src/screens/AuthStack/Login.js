import { StyleSheet, View, Text, Pressable } from 'react-native';
import { font, primaryColor, backgroundColor } from '../../styles/globalstyles';
import GoogleAuthButton from '../../components/GoogleAuthButton';
import { useDispatch } from 'react-redux';

const Login = ({ navigation }) => {
    const dispatch = useDispatch();

    const navigate_to_signup = () => {
        dispatch({
            type: 'SCREEN_CHANGE',
            payload: { screenName: 'SignUp' },
        });
        navigation.navigate('SignUpOne');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hi, welcome.</Text>

            <GoogleAuthButton text={'Sign in with google account'} />
            <View style={styles.main_info}>
                <Text style={styles.info}>Dont have an account,</Text>
                <Pressable onPress={navigate_to_signup}>
                    <Text style={styles.info2}>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // borderWidth: 10,
        // borderColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        backgroundColor: backgroundColor,
    },
    header: {
        fontSize: 30,
        fontFamily: font,
        textAlign: 'center',
    },
    main_info: {
        flexDirection: 'row',
        gap: 5,
    },
    info: {
        fontFamily: font,
    },
    info2: {
        fontFamily: font,
        color: primaryColor,
    },
});

export default Login;
