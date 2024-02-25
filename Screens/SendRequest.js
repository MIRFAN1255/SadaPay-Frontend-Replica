import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import IIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const SendRequest = ({Personal}) => {
  const navigation = useNavigation();
  const navigateBack = () => {
    if (Personal) {
      navigation.navigate(Personal);
    } else {
      navigation.goBack();
    }
  };

  const [inputValue, setInputValue] = useState('0');
  const [isButtonsDisabled, setButtonsDisabled] = useState(true);
  const [showLimitMessage, setShowLimitMessage] = useState(false);

  const TRANSACTION_LIMIT = 200000;

  useEffect(() => {
    setButtonsDisabled(inputValue === '0');

    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue) && numericValue >= TRANSACTION_LIMIT) {
      setShowLimitMessage(true);
      setTimeout(() => {
        setShowLimitMessage(false);
      }, 2000);
    }
  }, [inputValue]);

  const handleKeyboardPress = (value) => {
    setInputValue((prevValue) => {
      if (value === 'b') {
        const newValue = prevValue.slice(0, -1);
        return newValue === '' ? '0' : newValue;
      }
      const numericValue = parseInt(prevValue + value, 10);
      if (!isNaN(numericValue) && numericValue > TRANSACTION_LIMIT) {
        return TRANSACTION_LIMIT.toString();
      }
      return prevValue === '0' ? value : prevValue + value;
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container1}>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity onPress={navigateBack}>
            <View style={styles.icon_wrapper}>
              <IIcon name="chevron-back" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <View style={{ alignItems: 'center', backgroundColor: 'transparent', marginRight: 20 }}>
            <Text style={{ fontSize: 18, color: 'white' }}>Current balance</Text>
            <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Rs. 500</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1.2, backgroundColor: 'transparent', }}>
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={{ fontSize: 66, fontWeight: 'bold', color: 'white', marginBottom: 5}}>Rs. </Text>
          <TextInput style={{fontSize: 66, fontWeight: 'bold', color: 'white'}} value={inputValue} />
        </View>
       
        <View style={{ flex: 1, backgroundColor: 'transparent'}}>
         
          {showLimitMessage && (
            <View style={{ justifyContent: 'center',alignItems: 'center',flexDirection: 'row', backgroundColor: 'transparent' }}>
              <View style={styles.icon_container}>
                <View
                  style={{
                    width: 22,
                    height: 22,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff2f1',
                    borderRadius: 20,
                    marginRight: 20,
                  }}
                >
                  <AIcon name="exclamation" size={20} color="#ff7b66" />
                </View>
              </View>
              <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>
                Limit per transaction is Rs. 200,000
              </Text>
            </View>
          )}
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
            <View style={[styles.keyboardButton, styles.transparentButton]}></View>
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
                <Icon name="backspace-outline" style={{ color: 'white', fontSize: 30 }} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={{ flexDirection: 'row', flex: 1, backgroundColor: 'transparent', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={[styles.button, isButtonsDisabled && styles.disabledButton]} 
            disabled={isButtonsDisabled}
            onPress={() => navigation.navigate('RequestMoney')}>
              <Text style={[styles.textStyle, isButtonsDisabled && styles.disabledText]}>Request</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={[styles.button, isButtonsDisabled && styles.disabledButton]} 
            disabled={isButtonsDisabled}
            onPress={() => navigation.navigate('SendMoney')}>
              <Text style={[styles.textStyle, isButtonsDisabled && styles.disabledText]}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ff7b66',
  },
  container1: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  icon_wrapper: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
  },
  icon_container: {
    flex: 0.2,
    backgroundColor: 'transparent',
    marginRight: 10,
  },
  container2: {
    flex: 2,
    backgroundColor: 'transparent',
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

  container3: {
    flex: 0.6,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 14,
    margin: 12,
    padding: 20,
  },
  disabledButton: {
    backgroundColor: '#b95c4d',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  disabledText: {
    color: '#d5a098',
  },
  transactionLimitText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default SendRequest;