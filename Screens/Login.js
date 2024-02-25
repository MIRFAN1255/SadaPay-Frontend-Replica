import React, { useState, useEffect, } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const correctPIN = "12365";
    const [enteredDigits, setEnteredDigits] = useState(['', '', '', '', '']);

    useEffect(() => {
        const enteredPIN = enteredDigits.join('');
        if (enteredPIN.length === enteredDigits.length) {
            if (enteredPIN === correctPIN) {
                // Correct PIN, navigate to another screen
                navigation.navigate('AppTabs');
            } else {
                // Incorrect PIN, show an alert
                Alert.alert('Incorrect PIN', 'Please enter correct PIN.');
                // Clear the entered digits
                setEnteredDigits(['', '', '', '', '']);
            }
        }
    }, [enteredDigits, correctPIN]);

    const handleTextChange = (newDigit, index) => {
        if (/^\d{0,1}$/.test(newDigit)) {
            const updatedDigits = [...enteredDigits];
            updatedDigits[index] = newDigit;
            setEnteredDigits(updatedDigits);
        }
    };

    const handleKeyboardPress = (value) => {
        if (value === 'b') {
            // Handle backspace
            const updatedDigits = [...enteredDigits];
            for (let i = updatedDigits.length - 1; i >= 0; i--) {
                if (updatedDigits[i] !== '') {
                    updatedDigits[i] = '';
                    break; // Remove only one digit at a time
                }
            }
            setEnteredDigits(updatedDigits);
        } else if (value === 'fingerprint') {
            // Handle fingerprint button (you can add your logic here)
        } else {
            // Handle numeric button presses (0-9)
            const updatedDigits = [...enteredDigits];
            const emptyIndex = updatedDigits.indexOf('');
            if (emptyIndex !== -1) {
                updatedDigits[emptyIndex] = value;
                setEnteredDigits(updatedDigits);
            }
        }
    };
    return (
        <View style={styles.wrapper}>
            <View style={styles.container1}>
                <View>
                    <Image
                        source={require('../assets/SadapayWhite.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.loginPin_box}>
                    <Text style={styles.loginPin_txt}>Enter your login PIN</Text>
                    <View style={styles.container}>
                        {enteredDigits.map((digit, index) => (
                            <View key={index} style={styles.inputContainer}>
                                <TextInput
                                    style={[styles.input, { color: 'white', fontWeight: 'bold' }]}
                                    keyboardType="numeric"
                                    value={enteredDigits[index]}
                                    editable={false} // To prevent direct text input
                                    // onChangeText={(newDigit) => handleTextChange(newDigit, index)}
                                    placeholder=""
                                />
                                <View style={styles.line} />
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.forgotPin}>
                        <Text style={styles.forgotPIn_txt}>Forgot PIN?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container2}>
                <View style={styles.customKeyboard}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('1')}
                        >
                            <Text style={styles.buttonText}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('2')}
                        >
                            <Text style={styles.buttonText}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('3')}
                        >
                            <Text style={styles.buttonText}>3</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('4')}
                        >
                            <Text style={styles.buttonText}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('5')}
                        >
                            <Text style={styles.buttonText}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('6')}
                        >
                            <Text style={styles.buttonText}>6</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('7')}
                        >
                            <Text style={styles.buttonText}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('8')}
                        >
                            <Text style={styles.buttonText}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('9')}
                        >
                            <Text style={styles.buttonText}>9</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('fingerprint')}
                        >
                            <Text style={styles.buttonText}>
                                <Icon name="fingerprint"
                                    style={{ color: 'white', fontSize: 36, }} /></Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('0')}
                        >
                            <Text style={styles.buttonText}>0</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.keyboardButton, styles.transparentButton]}
                            onPress={() => handleKeyboardPress('b')}
                        >
                            <Text style={styles.buttonText}>
                                <Icon name="backspace-outline"
                                    style={{ color: 'white', fontSize: 30, }} /></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#ff7b66',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container1: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container2: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    image: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },

    loginPin_box: {
        backgroundColor: 'transparent',
        padding: 20,
        width: '80%',
    },

    loginPin_txt: {
        fontSize: 28,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },

    forgotPin: {
        backgroundColor: 'transparent',
        padding: 10,
        alignItems: 'center',
        marginTop: 15,
    },
    forgotPIn_txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 30,
    },

    customKeyboard: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    keyboardButton: {
        width: 100,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    transparentButton: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },

    //textinput
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: 'transparent',
    },
    line: {
        width: '50%',
        height: 6,
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 5,
    },
    input: {
        textAlign: 'center',
        fontSize: 24,
    },
});

export default Login;