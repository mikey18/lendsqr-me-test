import { Pressable, Image, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { font, textInputBorder } from '../styles/globalstyles';
import { useDispatch } from 'react-redux';
import { storage } from '../storage/appstorage';
import { login, setUserData } from '../store/authSlice';
import {
    GoogleSignin,
    isSuccessResponse,
} from '@react-native-google-signin/google-signin';

const GoogleAuthButton = ({ text }) => {
    const google = require('../../assets/images/google.png');
    const dispatch = useDispatch();
    const [isSigningIn, setIsSigningIn] = useState(false);

    const signIn = async () => {
        // Check if sign-in is already in progress
        if (isSigningIn) return;
        setIsSigningIn(true);

        try {
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (isSuccessResponse(response)) {
                storage.set('auth', true);
                storage.set('userData', JSON.stringify(response.data));
                dispatch(setUserData(response.data));
                dispatch(login());
            } else {
                console.log('Sign-in was cancelled or unsuccessful');
            }
        } catch (error) {
            console.error('Error signing in with Google credentials:', error);
        } finally {
            // Reset loading state after sign-in completes or fails
            setIsSigningIn(false);
        }
    };

    return (
        <Pressable onPress={signIn} style={styles.button}>
            <Image source={google} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
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
});

export default GoogleAuthButton;
