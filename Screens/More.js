import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FIcon from 'react-native-vector-icons/Feather';
import ETIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const More = ({ navigation }) => {
    const ManageDevices = () => {
        navigation.navigate('ManageDevices');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainwrapper}>
                <View style={styles.account}>
                    <View style={{
                        width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                        backgroundColor: '#e6faf8', borderRadius: 50, marginRight: 20
                    }}>
                        <MCIcon name="account"
                            size={40} color="#01d3b0" />
                    </View>
                    <Text style={styles.account_text}>Muhammad Irfan</Text>
                </View>

                <LinearGradient colors={['#2d232b', '#713b39']}
                    start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                    style={styles.gradient}>
                    <View style={{
                        width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                        backgroundColor: '#4c3d42', borderRadius: 50, marginRight: 20
                    }}>
                        <Icon name="briefcase"
                            size={25} color="white" />
                    </View>
                    <View style={styles.btext_container}>
                        <Text style={styles.baccount_txt}>Open a business account</Text>
                        <Text style={styles.account_footer_txt}>Receive instant payments from around the world</Text>
                    </View>
                </LinearGradient>
                <View style={styles.innerwrapper2}>
                    <View style={styles.header}>
                        <Text style={styles.titleText}>Limit</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.contentText}>Incoming</Text>
                        <Text style={styles.contentTextright}>Rs. 400,000 left</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'tomato',
                        width: 325, height: 9, borderRadius: 10,
                        margin: 10, alignSelf: 'center'
                    }}>

                    </View>
                    <Text style={styles.footerText}>Your Rs. 400k monthly limit resets on the 1st of next month</Text>
                </View>

                <View style={styles.account}>
                    <Text style={styles.account_txt}>Enter Rewards Hub</Text>
                    <View style={{
                        width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                        backgroundColor: 'transparent', borderRadius: 50, marginRight: 20
                    }}>
                        <Image
                            source={require('../assets/SadapayRewards.png')}
                            style={styles.rewards} />
                    </View>
                </View>

                <View style={styles.innerwrapper3}>
                    <View style={styles.disc}>
                        <Text style={styles.txt}>Discover</Text>
                        <View style={styles.dicon}>
                            <MCIcon name="play-circle"
                                size={20} color="#ff7b66" />
                        </View>
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
                <View>
                    <View style={styles.account}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff2f1', borderRadius: 50, marginRight: 20
                        }}>
                            <MIcon name="chat"
                                size={30} color="#ff7b66" />
                        </View>
                        <Text style={styles.account_txt}>Chat with support</Text>
                    </View>
                </View>

                <View style={styles.info}>
                    <View style={styles.header}>
                        <Text style={styles.titleText}>Info</Text>
                    </View>
                    <View style={styles.info123}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff2f1', borderRadius: 50, marginRight: 20
                        }}>
                            <MCIcon name="shield-check-outline"
                                size={30} color="#ff7b66" />
                        </View>
                        <Text style={styles.account_txt}>Privacy policy</Text>
                    </View>
                    <View style={styles.info123}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff2f1', borderRadius: 50, marginRight: 20
                        }}>
                            <FIcon name="file-text"
                                size={30} color="#ff7b66" />
                        </View>
                        <Text style={styles.account_txt}>Terms & conditions</Text>
                    </View>
                    <View style={styles.info123}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff2f1', borderRadius: 50, marginRight: 20
                        }}>
                            <FIcon name="calendar"
                                size={30} color="#ff7b66" />
                        </View>
                        <Text style={styles.account_txt}>Schedule of charges</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.account}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff2f1', borderRadius: 50, marginRight: 20
                        }}>
                            <IIcon name="phone-portrait-outline"
                                size={30} color="#ff7b66" />
                        </View>
                        <Text style={styles.account_txt}>Manage devices</Text>
                        <View style={styles.icon_wrapper_md}>
                            <TouchableOpacity onPress={ManageDevices} >
                                <IIcon name="chevron-forward"
                                    size={25} color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.account}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                            backgroundColor: '#fff2f1', borderRadius: 50, marginRight: 20
                        }}>
                            <MCIcon name="logout-variant"
                                size={30} color="#ff7b66" />
                        </View>
                        <Text style={styles.account_txt}>Log out</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.txt_bottom1}>Developed for <MCIcon name="flag"
                        size={20} color="green" />with <MCIcon name="heart"
                            size={20} color="red" /> by <MCIcon name="earth"
                                size={20} color="#1a83f9" /></Text>
                    <Text style={styles.txt_bottom2}>App version: 0.1.8948 </Text>
                    <Text style={styles.txt_bottom3}>Call us at <Text style={styles.redText}>0800-1-SADA</Text></Text>
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

    //contains current balance
    innerwrapper11: {
        flex: 1,
        backgroundColor: '#01d4b1',
        borderRadius: 20,
        padding: 20,
        margin: 15,
        marginRight: 10,
    },
    txtbalance: {
        color: 'white'
    },
    txtbalance1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },

    account_text: {
        flex: 1,
        fontSize: 21,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },

    //contains load money + send & request
    innerwrapper12: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
    },

    //contains send & request
    innerwrapper111: {
        flex: 1,
        backgroundColor: "#1fa8f8",
        borderRadius: 20,
        padding: 15,
        margin: 15,
        marginLeft: 10,
        marginBottom: 0,
    },

    //contains send and request
    innerwrapper121: {
        flex: 1,
        backgroundColor: "#fb826f",
        borderRadius: 20,
        padding: 15,
        margin: 15,
        marginLeft: 10,
        margintop: 0,
    },
    txt_loadmoney: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    txt_sendrequest: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },

    account: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        margin: 15,
    },
    account_txt: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },

    gradient: {
        flex: 1,
        borderRadius: 20,
        margin: 15,
        padding: 20,
        flexDirection: 'row',
    },
    btext_container: {
        flex: 1,
        flexDirection: 'column',
    },

    baccount_txt: {
        flex: 1,
        fontSize: 21,
        fontWeight: 'bold',
        color: 'white',
    },
    account_footer_txt: {
        fontSize: 18,
        color: '#b2acac',
        marginTop: 0,
    },

    //contains transcations
    innerwrapper2: {
        flex: 0.8,
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
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    contentTextright: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'tomato',
    },
    footerText: {
        fontSize: 17,
        color: 'gray',
        // marginLeft: 60,
    },


    //contains discover
    innerwrapper3: {
        flex: 1,
        backgroundColor: 'transparent',
        // borderRadius: 20,
        // padding: 20,
        margin: 15,
    },
    disc: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },

    dicon: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
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
    rewards: {
        width: 140,
        height: 70,
        position: 'absolute',
        top: 0,
        left: -50,
        zIndex: -1, // Send the image behind the container
    },

    DV1_txt: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },

    txt: {
        fontSize: 20,
    },

    info: {
        flex: 0.8,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        margin: 15,
    },
    info123: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginTop: 15,

    },
    txt_bottom1: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        alignSelf: 'center',
        marginTop: 10,
    },
    txt_bottom2: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        alignSelf: 'center',
        marginTop: 10,
    },
    txt_bottom3: {
        flex: 1,
        fontSize: 16,
        fontWeight: '400',
        color: 'black',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    redText: {
        color: 'red',
    },
    icon_wrapper_md: {
        flex: 0.1,
        padding: 10,
        backgroundColor: 'transparent',
        marginTop: 5,
    },
});

export default More;