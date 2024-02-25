import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ETIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import IAIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoadMoney = ({Personal}) => {
    const navigation = useNavigation();
    const navigateBack = () => {
        if (Personal) {
            navigation.navigate(Personal);
        } else {
            navigation.goBack();
        }
    };
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={navigateBack}>
                <View style={styles.icon_wrapper}>
                    <IIcon name="chevron-back"
                        size={30} color="black" />
                </View>
            </TouchableOpacity>
            

            <View style={styles.text_wrapper1}>
                <Text style={styles.text}>
                    Load money
                </Text>
            </View>
            <View style={{flexDirection: 'row', margin: 15, marginTop: 5, marginBottom: 15, }}>
                <Text style={styles.text_limit}>
                    Rs. 400,000    
                </Text>
                <Text style={styles.text_incoming_limit }>incoming limit left this month</Text>
            </View>
            <View style={{
                flexDirection: 'row', margin: 15, marginTop: 5,
                marginBottom: 0, }}>
                <Text style={styles.text_local_transfer}>
                    Receive local transfers
                </Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.text_container}>
                    <Text style={styles.footer_text}>My SadaPay account number</Text>
                    <Text style={styles.top_text}>03018894455</Text>
                    <View style={{ backgroundColor: 'transparent', flexDirection: 'row', marginTop: 5, }}>
                        <IAIcon name="copy1"
                            size={25} color="#ff7b66" />
                        <Text style={{ fontSize: 22, color: 'tomato', marginLeft: 20, fontWeight: 'bold' }}>Copy</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', margin: 15, }}>
                <Text style={styles.text_international_transfer}>
                    Receive international transfers
                </Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.text_container}>
                    <Text style={styles.footer_text}>My SadaPay IBAN number</Text>
                    <Text style={styles.top_text}>PK70 SADA 0000 0030 1889 4455</Text>
                    <View style={{backgroundColor: 'transparent', flexDirection: 'row', marginTop: 5,}}>
                            <IAIcon name="copy1"
                                size={25} color="#ff7b66" />
                            <Text style={{fontSize: 22, color: 'tomato', marginLeft: 20, fontWeight: 'bold'}}>Copy</Text>
                    </View>
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
        // flex: 1,
        justifyContent: 'flex-start',
        verticalAlign: 'bottom',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginLeft: 5,
    },
    text_wrapper1: {
        // flex: 1,
        margin: 15,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 32,
        fontWeight: '600',
        color: 'black',
        backgroundColor: 'transparent',
    },
    text_limit: {
        fontSize: 20,
        color: 'tomato',
        marginRight: 5,
    },
    text_incoming_limit: {
        fontSize: 19,
    },
    text_local_transfer: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    text_international_transfer: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    container1: {
        backgroundColor: 'transparent',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 15,
    },
    text_container: {
        // flex: 1,
        backgroundColor: 'transparent',
        margin: 10,
        marginLeft: 25,
        
    },
    top_text: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black',
        marginTop: 5,
    },
    footer_text: {
        fontSize: 18,
        color: 'gray',
        marginTop: 5,
    },
})

export default LoadMoney;