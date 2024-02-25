import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ETIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Personal = ({ navigation }) => {
    const handlePress = () => {
        navigation.navigate('MyCards');
    };  
    const LMhandlePress = () => {
        navigation.navigate('LoadMoney');
    };  
    const SRhandlePress = () => {
        navigation.navigate('SendRequest');
    };  
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainwrapper}>
                <View style={styles.innerwrapper1}>
                    <View style={styles.innerwrapper1_1}>
                        <TouchableOpacity onPress={handlePress} >
                            <View style={styles.innerwrapper11}>
                                <Text style={styles.txtbalance}>Current Balance</Text>
                                <Text style={styles.txtbalance1}>Rs. 24,500</Text>

                                <View style={{ flex: 1, backgroundColor: 'transparent', marginTop: 128,  flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10 }}>
                                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end', marginBottom: 5 }}>
                                        <Image
                                            source={require('../assets/MastercardIcon.png')}
                                            style={styles.image}
                                        />
                                    </View>
                                    <Text> <Icon name="arrow-forward" style={{ color: 'white', fontSize: 40, }} /></Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.innerwrapper1_2}>
                        <TouchableOpacity onPress={LMhandlePress}>
                            <View style={styles.innerwrapper111}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-start', }}>
                                    <Text> <Icon name="arrow-downward" style={{ color: 'white', fontSize: 40, }} /></Text>
                                </View>
                                <Text style={styles.txt_loadmoney}>Load Money</Text>
                            </View>
                        </TouchableOpacity>
                          
                            <View style={styles.innerwrapper121}>
                                <TouchableOpacity onPress={SRhandlePress}>
                                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'flex-end', }}>
                                    <Text> <Icon name="arrow-outward" style={{ color: 'white', fontSize: 40, }} /></Text>
                                </View>
                                <Text style={styles.txt_sendrequest}>Send & Request</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
                <View style={styles.innerwrapper2}>
                    <View style={styles.header}>
                        <Text style={styles.titleText}>Transactions</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <View style={{
                            width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff2f1', borderRadius: 12, marginRight: 20
                        }}>
                            <MCIcon name="arrow-top-right-bold-outline"
                                size={40} color="#ff7b66" />
                        </View>
                        <Text style={styles.contentText}>MUHAMMAD AZHAR</Text>
                        <Text style={styles.contentTextright}>-Rs. 10,000</Text>
                    </View>
                    <Text style={styles.footerText}>5:34 PM</Text>
                </View>
                <View style={styles.innerwrapper3}>
                    <View style={styles.disc}>
                        <Text style={styles.txt}>Discover</Text>
                        <View style={styles.dicon}>
                            <MCIcon name="play-circle"
                                size={20} color="#ff7b66" />
                        </View>
                        <ETIcon name="cross"
                            size={25} color="gray" />
                    </View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        style={styles.SV}>
                        <View style={styles.DV1}>
                            <Image
                                source={require('../assets/SadapayBallons.png')}
                                style={styles.ballons} />
                            <View style={{
                                flex: 1, flexDirection: 'column', paddingBottom: 10,
                                justifyContent: 'flex-end', backgroundColor: 'transparent'
                            }}>
                                <Text style={styles.DV1_txt}>Welcome to SadaPay!</Text>
                            </View>
                        </View>
                        <View style={styles.DV2}>
                            <Image
                                source={require('../assets/SadapayCoins.png')}
                                style={styles.coins} />
                            <View style={{
                                flex: 1, flexDirection: 'column', paddingBottom: 10,
                                justifyContent: 'flex-end', backgroundColor: 'transparent'
                            }}>
                                <Text style={styles.DV1_txt}>Load money to your account</Text>
                            </View>
                        </View>
                        <View style={styles.DV3}>
                            <Image
                                source={require('../assets/SadapayDebit.png')}
                                style={styles.debit} />
                            <View style={{
                                flex: 1, flexDirection: 'column', paddingBottom: 10,
                                justifyContent: 'flex-end', backgroundColor: 'transparent'
                            }}>
                                <Text style={styles.DV1_txt}>Order your physical card</Text>
                            </View>
                        </View>
                        <View style={styles.DV4}>
                            <Image
                                source={require('../assets/SadapayVirtual.png')}
                                style={styles.virtual} />
                            <View style={{
                                flex: 1, flexDirection: 'column', paddingBottom: 10,
                                justifyContent: 'flex-end', backgroundColor: 'transparent'
                            }}>
                                <Text style={styles.DV1_txt}>Use your virtual card</Text>
                            </View>
                        </View>
                        <View style={styles.DV5}>
                            <Image
                                source={require('../assets/SadapaySecure.png')}
                                style={styles.secure} />
                            <View style={{
                                flex: 1, flexDirection: 'column', paddingBottom: 10,
                                justifyContent: 'flex-end', backgroundColor: 'transparent'
                            }}>
                                <Text style={styles.DV1_txt}>Secure your account</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    //contains all views
    mainwrapper: {
        flex: 1,
        backgroundColor: '#f2f6f7',
    },

    //contains balance and send & receive views
    innerwrapper1: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    innerwrapper1_1: {
        flex: 3,
        backgroundColor: 'transparent',
    },

    //contains current balance
    image: {
        width: 55,
        height: 33,
    },
    innerwrapper11: {
        flex: 1,
        backgroundColor: '#01d4b1',
        borderRadius: 20,
        padding: 20,
        margin: 15,
    },
    txtbalance: {
        color: 'white',
        fontSize: 16,
    },
    txtbalance1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },

    //contains load money + send & request
    innerwrapper1_2: {
        flex: 2,
        backgroundColor: 'transparent',
        flexDirection: 'column',
    },

    //contains load money
    innerwrapper111: {
        flex: 1,
        backgroundColor: "#1fa8f8",
        borderRadius: 20,
        padding: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 5,
    },

    //contains send and request
    innerwrapper121: {
        flex: 1,
        backgroundColor: "#fb826f",
        borderRadius: 20,
        padding: 15,
        marginRight: 15,
        marginBottom: 15,
        marginTop: 5,
    },
    txt_loadmoney: {
        color: "white",
        fontSize: 23,
        fontWeight: 'bold',
    },
    txt_sendrequest: {
        color: "white",
        fontSize: 23,
        fontWeight: 'bold',
    },

    //contains transcations
    innerwrapper2: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        margin: 15,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    titleText: {
        fontSize: 18,
    },
    button: {
        backgroundColor: 'transparent',
        padding: 8,
    },
    buttonText: {
        color: 'tomato',
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
    },
    contentText: {
        flex: 1, // Allows this text to expand and fill the available space.
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    contentTextright: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    footerText: {
        fontSize: 18,
        color: 'gray',
        marginLeft: 60,
    },

    //contains discover
    innerwrapper3: {
        flex: 1,
        backgroundColor: 'transparent',
        // borderRadius: 20,
        // padding: 20,
        margin: 15,
    },

    //scrollview
    SV: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },

    //welcome to sadapay
    DV1: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        marginLeft: 0,
        marginTop: 55,
        width: 150,
        height: 190,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',

    },

    //load money to your account
    DV2: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        marginLeft: 5,
        marginTop: 50,
        width: 150,
        height: 190,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //order your physical card
    DV3: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        marginLeft: 5,
        marginTop: 50,
        width: 150,
        height: 190,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //use your virtual card
    DV4: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        marginLeft: 5,
        marginTop: 50,
        width: 150,
        height: 190,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //secure your account
    DV5: {
        flex: 1,
        backgroundColor: 'white',
        margin: 10,
        marginRight: 0,
        marginLeft: 5,
        marginTop: 50,
        width: 150,
        height: 190,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ballons: {
        width: 105,
        height: 190,
        position: 'absolute',
        top: -50,
        zIndex: -1, // Send the image behind the container
    },
    coins: {
        width: 105,
        height: 165,
        position: 'absolute',
        top: -48,
        zIndex: -1, // Send the image behind the container
    },
    debit: {
        width: 97,
        height: 160,
        position: 'absolute',
        top: -48,
        zIndex: -1, // Send the image behind the container
    },
    virtual: {
        width: 122,
        height: 160,
        position: 'absolute',
        top: -48,
        zIndex: -1, // Send the image behind the container
    },
    secure: {
        width: 133,
        height: 140,
        position: 'absolute',
        top: -48,
        zIndex: -1, // Send the image behind the container
    },

    DV1_txt: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },

    disc: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    txt: {
        fontSize: 20,
    },
    dicon: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    }
});

export default Personal;