import { StyleSheet, View, Text } from 'react-native';
import { backgroundColor, font } from '../../styles/globalstyles';
import GoogleAuthButton from '../../components/GoogleAuthButton';

const SignUpTwo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Finalize account creation.</Text>
            <GoogleAuthButton text={'Sign up with google account'} />
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
});
export default SignUpTwo;
