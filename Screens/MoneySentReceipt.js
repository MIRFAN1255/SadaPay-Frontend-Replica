import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5.js';
import OIcon from 'react-native-vector-icons/Octicons';
import IIcon from 'react-native-vector-icons/Ionicons';

const MoneySentReceipt = () => {
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
                <View style={styles.container1_sub}>

                    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'transparent', justifyContent: 'center' }}>
                        <Image
                            source={require('../assets/SadapayIcon.png')}
                            style={styles.image}

                        />
                        <Text style={{ fontSize: 26, fontWeight: 600, marginLeft: 10 }}>SADA</Text>
                        <Text style={{ fontSize: 26, fontWeight: 400, }}>PAY</Text>
                    </View>
                    <View style={{backgroundColor: 'transparent',marginRight: 15, alignContent: 'flex-end' }}>
                        <TouchableOpacity><Text style={{ fontSize: 22, fontWeight: 400, color: '#ff7b66' }}>Share</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.card}>
                    <View style={styles.circleview}>
                        <View style={styles.circle}>
                            <IIcon name="checkmark-sharp" size={38} color="white" />
                        </View>
                    </View>
                    <View style={styles.txtdiv0}>
                        <Text style={styles.Rs_4500}>Rs. 45,00</Text>
                    </View>
                    <View style={styles.txtdiv1}>
                        <Text style={styles.txtirfan}>Muhammad Irfan to</Text>
                        <Text style={styles.txtirfan}>MUHAMMAD IRFAN</Text>
                    </View>
                    <View style={styles.txtdiv2}>
                        <Text style={styles.txtdatetime}>Date & Time (PKT)</Text>
                        <Text style={styles.txtdt}>18 October 2023, 10:18 PM</Text>
                    </View>
                    <View style={styles.txtdiv3}>
                        <Text style={styles.txtRA}>Receiver's Account</Text>
                        <Text style={styles.txtBank}>Bank of Punjab *0036</Text>
                    </View>
                    <View style={styles.txtdiv4}>
                        <Text style={styles.txtrefer}>Reference Number</Text>
                        <Text style={styles.txtrefno}>080136</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => {/* Your onPress logic */ }}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textclose}>Close</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <IIcon name="close" size={38} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#f2f6f7',
    },
    container1: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    container1_sub: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center'
    },
    image: {
        width: 36,
        height: 36,
    },
    container2: {
        flex: 3,
        backgroundColor: 'transparent',
    },
    card: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        marginLeft: 36,
        marginRight: 36,
        elevation: 20,
        borderRadius: 30,
    },
    circleview: {
        alignItems: 'center',
        flex: 0.4,
        backgroundColor: 'transparent'
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: '#ff7b66',
        borderRadius: 50,
        position: 'absolute',
        top: -62,
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtdiv0: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
    },
    Rs_4500: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'black'
    },
    txtdiv1: {
        alignItems: 'center',
        marginTop: 10,
    },
    txtirfan: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
    },
    txtdiv2: {
        marginTop: 10,
    },
    txtdatetime: {
        fontSize: 18,
    },
    txtdt: {
        fontSize: 18,
        color: 'black',
        marginTop: 5,
    },
    txtdiv3: {
        marginTop: 10,
    },
    txtRA: {
        fontSize: 18,
    },
    txtBank: {
        fontSize: 18,
        color: 'black',
        marginTop: 5,
    },
    txtdiv4: {
        marginTop: 10,
    },
    txtrefer: {
        fontSize: 18,
    },
    txtrefno: {
        fontSize: 20,
        color: 'black',
        marginTop: 5,
    },

    container3: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: "flex-end",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ff7b66',
        margin: 20,
        padding: 12,
        borderRadius: 18,
    },
    textContainer: {
        flex: 1,
    },
    textclose: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    iconContainer: {
        marginLeft: 10,
        marginRight: 10
    },
});

export default MoneySentReceipt;