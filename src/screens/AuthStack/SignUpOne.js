import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';
import {
    backgroundColor,
    font,
    primaryColor,
    textColor,
    textInputBorder,
} from '../../styles/globalstyles';
import { useState } from 'react';

const error_color = 'red';

const SignUpOne = ({ navigation }) => {
    const [userData, setUserData] = useState({
        full_name: '',
        phone_number: '',
        email: '',
    });
    const [error, setError] = useState({
        full_name: null,
        phone_number: null,
        email: null,
    });

    const navigate_to_login = () => {
        navigation.goBack();
    };

    const handleInputChange = (field, text) => {
        setUserData((prev) => ({
            ...prev,
            [field]: text,
        }));
        if (error[field]) {
            setError((prevError) => ({
                ...prevError,
                [field]: null,
            }));
        }
    };

    const next = () => {
        let hasError = false;
        const newError = {
            full_name: null,
            phone_number: null,
            email: null,
        };

        if (userData.full_name.length === 0) {
            newError.full_name = 'Full name is required.';
            hasError = true;
        }
        if (userData.phone_number.length === 0) {
            newError.phone_number = 'Phone number is required.';
            hasError = true;
        }
        if (userData.email.length === 0) {
            newError.email = 'Email is required.';
            hasError = true;
        }

        if (hasError) {
            setError(newError);
        } else {
            setError({
                full_name: null,
                phone_number: null,
                email: null,
            });
            navigation.navigate('SignUpTwo');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Create an account, fill in your details
            </Text>
            <View style={styles.all_inputs}>
                <View style={styles.label_input}>
                    <Text style={styles.label}>Fullname</Text>
                    <TextInput
                        style={[
                            styles.input,
                            error.full_name && styles.errorInput,
                        ]}
                        // style={styles.input}
                        onChangeText={(text) =>
                            handleInputChange('full_name', text)
                        }
                        placeholder={'fullname'}
                        keyboardType="default"
                        value={userData.full_name}
                    />
                    <Text style={styles.errorText}>{error.full_name}</Text>
                </View>
                <View style={styles.label_input}>
                    <Text style={styles.label}>Phonenumber</Text>
                    <TextInput
                        style={[
                            styles.input,
                            error.phone_number && styles.errorInput,
                        ]}
                        keyboardType="phone-pad"
                        placeholder={'phonenumber'}
                        onChangeText={(text) =>
                            handleInputChange('phone_number', text)
                        }
                        value={userData.phone_number}
                    />
                    <Text style={styles.errorText}>{error.phone_number}</Text>
                </View>
                <View style={styles.label_input}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={[styles.input, error.email && styles.errorInput]}
                        keyboardType="email-address"
                        placeholder={'email'}
                        onChangeText={(text) =>
                            handleInputChange('email', text)
                        }
                        value={userData.email}
                    />
                    <Text style={styles.errorText}>{error.email}</Text>
                </View>
            </View>

            <Pressable onPress={next} style={styles.button}>
                <Text style={styles.text}>Next</Text>
            </Pressable>
            <View style={styles.main_info}>
                <Text style={styles.info}>Already have an account,</Text>
                <Pressable onPress={navigate_to_login}>
                    <Text style={styles.info2}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // borderWidth: 10,
        // borderColor: error_color,
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
    all_inputs: {
        gap: 10
    },
    label_input: {
        width: '90%',
        gap: 5,
    },
    label: {
        fontFamily: font,
    },
    input: {
        borderColor: textInputBorder,
        borderWidth: 1,
        borderRadius: 50,
        paddingLeft: '5%',
        paddingRight: '5%',
        fontFamily: font,
    },
    errorInput: {
        borderColor: error_color,
    },
    errorText: {
        fontFamily: font,
        color: error_color,
        fontSize: 12,
        textAlign: 'right'
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
        width: '100',
        backgroundColor: primaryColor,
    },
    text: {
        fontFamily: font,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: textColor,
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
export default SignUpOne;
