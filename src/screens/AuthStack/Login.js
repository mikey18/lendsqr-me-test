import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { font, primaryColor, textInputBorder, backgroundColor } from '../../styles/globalstyles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthenticationContext';
import { storage } from '../../storage/appstorage';

const Login = ({ navigation }) => {
    const google = require('../../../assets/images/google.png');
    const { setIsAuthenticated } = useContext(AuthContext);

    const login = () => {
        storage.set('auth', true)
        setIsAuthenticated(true)
    };

    const navigate_to_signup = () => {
        navigation.navigate('SignUpOne')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hi, welcome.</Text>

            <Pressable onPress={login} style={styles.button}>
                <Image source={google} style={styles.image} />
                <Text style={styles.text}>Sign in with google account</Text>
            </Pressable>
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
    button: {
        borderColor: textInputBorder,
        borderWidth: 1,
        borderRadius: 50,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        width: 25,
        height: 25,
    },
    text: {
        fontFamily: font,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        textAlignVertical: 'center',
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
