import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { backgroundColor, font } from '../../styles/globalstyles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthenticationContext';
import { storage } from '../../storage/appstorage';

const SignUpTwo = () => {
    const google = require('../../../assets/images/google.png');
    const { setIsAuthenticated } = useContext(AuthContext);

    const login = () => {
        storage.set('auth', true);
        setIsAuthenticated(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Finalize account creation.</Text>

            <Pressable onPress={login} style={styles.button}>
                <Image source={google} style={styles.image} />
                <Text style={styles.text}>Sign up with google account</Text>
            </Pressable>
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
        borderColor: 'grey',
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
});
export default SignUpTwo;
