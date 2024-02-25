import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import ETIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SendMoney = ({ SendRequest }) => {
    const navigation = useNavigation();

    const navigateBack = () => {
        if (SendRequest) {
            navigation.navigate(SendRequest);
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.icon_wrapper}>
                <TouchableOpacity onPress={navigateBack}>
                    <IIcon name="chevron-back"
                        size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.text_wrapper1}>
                <Text style={styles.text}>
                    Send money
                </Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.icon_container}>
                    <View style={{
                        width: 50, height: 50, alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff2f1',
                        borderRadius: 20, marginRight: 20,
                        marginLeft: 20,
                    }}>
                        <MCIcon name="text-box-outline"
                            size={25} color="#ff7b66" />
                    </View>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.top_text}>New bank transfer</Text>
                    <Text style={styles.footer_text}>Send money to any bank or wallet account in Pakistan</Text>
                </View>
            </View>
        
            <View style={styles.QR_text}>
                <Text style={styles.qr_text}>
                    QUICK TRANSFER
                </Text>
            </View>
            <View style={styles.text_wrapper2}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff2f1',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: 'tomato', fontWeight: 'bold' }}>US</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>Umair Shah</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *6178</Text>
                        </View>
                    </View>
                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center', backgroundColor: 'green',
                                backgroundColor: '#e6faf8',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: "#02d2b0", fontWeight: 'bold' }}>I</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>irf@n</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *4455</Text>
                        </View>
                    </View>
                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff2f1',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: 'tomato', fontWeight: 'bold' }}>MA</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>Muaaz Alrai</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *8452</Text>
                        </View>
                    </View>
                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center', backgroundColor: 'green',
                                backgroundColor: '#e0f5fa',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: "#02d2b0", fontWeight: 'bold' }}>MS</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>M Shehzad</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *4736</Text>
                        </View>
                    </View>

                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff2f1',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: 'tomato', fontWeight: 'bold' }}>MA</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>Malik Aqeel</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *8919</Text>
                        </View>
                    </View>
                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center', backgroundColor: 'green',
                                backgroundColor: '#e0f5fa',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: "#02d2b0", fontWeight: 'bold' }}>NS</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>Nadeem Shah</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *7644</Text>
                        </View>
                    </View>
                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff2f1',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: 'tomato', fontWeight: 'bold' }}>WS</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>Waqas Satti</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *0992</Text>
                        </View>
                    </View>
                    <View style={styles.SVcontainer1}>
                        <View style={styles.SVicon_container}>
                            <View style={{
                                width: 50, height: 50, alignItems: 'center',
                                justifyContent: 'center', backgroundColor: 'green',
                                backgroundColor: '#e0f5fa',
                                borderRadius: 50,

                            }}>
                                <Text style={{ fontSize: 18, color: "#02d2b0", fontWeight: 'bold' }}>SD</Text>
                            </View>
                        </View>
                        <View style={styles.SVtext_container}>
                            <Text style={styles.SVtop_text}>Shahab u Den</Text>
                            <Text style={styles.SVfooter_text}>SadaPay *6347</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
    },
    icon_wrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        verticalAlign: 'bottom',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'transparent',
    },
    text_wrapper1: {
        flex: 1.5,
        margin: 15,
        marginTop: 0,
        marginBottom: 0,
        padding: 5,
        backgroundColor: 'transparent',
    },
    search_bar: {
        flex: 1.6,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "gray",
        backgroundColor: 'white',
        marginTop: 5,
        margin: 15,
    },
    text_wrapper2: {
        flex: 10,
        backgroundColor: 'white',
    },
    QR_text: {
        flex: 0.8,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
    },
    qr_text: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gray',
    },
    text: {
        fontSize: 34,
        fontWeight: '600',
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
        marginTop: 16,
        textAlign: 'center'
    },

    container1: {
        flex: 3.5,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        elevation: 20,
    },
    SVcontainer1: {
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
    },
    icon_container: {
        flex: 0.3,
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    SVicon_container: {
        flex: 0.2,
        backgroundColor: 'transparent',
    },
    text_container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 8,
        marginRight: 10,
        marginTop: 10,
    },
    SVtext_container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    top_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    SVtop_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    footer_text: {
        fontSize: 16,
        color: 'gray',
        marginTop: 8,
    },
    SVfooter_text: {
        fontSize: 16,
        color: 'gray',
        marginTop: 8,
    },
})

export default SendMoney;