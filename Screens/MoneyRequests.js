import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import ETIcon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MoneyRequest = ({PaymentsScreen}) => {
    const navigation = useNavigation();

    const navigateBack = () => {
        if (PaymentsScreen) {
            navigation.navigate(PaymentsScreen);
        } else {
            navigation.goBack();
        }
    };
    return (
        <View style={styles.wrapper}>
            <View style={styles.icon_wrapper}>
                <TouchableOpacity onPress={navigateBack}>
                <ETIcon name="cross"
                    size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.text_wrapper1}>
                <Text style={styles.text}>
                    Money requests
                </Text>
            </View>
            <View style={styles.text_wrapper2}>
                <Image
                    source={require('../assets/zzz.png')}
                    style={styles.image}
                />
                <Text style={styles.npr_text}>
                    No pending requests
                </Text>
                <View style={{backgroundColor: 'transparent', padding: 50, paddingTop: 0}}>
                    <Text style={styles.npr_text1}>
                        Money requests from other SadaPay users will appear here.
                    </Text>
                </View>
               
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    icon_wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'transparent',
    },
    text_wrapper1: {
        flex: 1,
        padding: 20,
    },
    text_wrapper2: {
        flex: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    image: {
        width: 60,
        height: 60,
    },
    npr_text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 15,
    },
    npr_text1: {
        fontSize: 18,
        color: 'gray',
        marginTop: 20,
        textAlign: 'center'
    },
})

export default MoneyRequest;