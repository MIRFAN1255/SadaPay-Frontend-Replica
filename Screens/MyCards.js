import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome5.js';
import OIcon from 'react-native-vector-icons/Octicons';
import IIcon from 'react-native-vector-icons/Ionicons';

const VirtualComponent = () => {
    const [isToggleOn, setToggleOn] = useState(false);

    const toggleSwitch = () => {
        setToggleOn(!isToggleOn);
    };
    return (
        <View style={styles.tsvcontainer3}>
            <View style={styles.tsvcontainer3_view1}>
                <View style={styles.tsvinnerwrapper11}>
                    <View style={styles.tspcardview1}>
                        <View style={styles.vtspcardview1c1}>
                            <Image
                                source={require('../assets/SadapayIcon.png')}
                                style={styles.vimage}
                            />
                            <Text style={styles.vtext}>Virtual</Text>
                        </View>
                        <View style={styles.vtspcardview1c2}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                                <Text style={styles.vdot}>●</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.vdotno}>8</Text>
                                <Text style={styles.vdotno}>6</Text>
                                <Text style={styles.vdotno}>4</Text>
                                <Text style={styles.vdotno}>7</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.vtspcardview2}>
                        <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                            <Text style={styles.vdot2}>Exp date</Text>
                            <Text style={styles.vdot2}>●</Text>
                            <Text style={styles.vdot2}>●</Text>
                            <Text style={styles.vdot2}>/</Text>
                            <Text style={styles.vdot2}>●</Text>
                            <Text style={styles.vdot2}>●</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 52 }}>
                            <Text style={styles.vdot}>CVC</Text>
                            <Text style={styles.vdot22}>●</Text>
                            <Text style={styles.vdot2}>●</Text>
                            <Text style={styles.vdot2}>●</Text>
                        </View>
                    </View>
                    <View style={styles.vtspcardview3}>
                        <TouchableOpacity style={styles.vbutton}>
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.vbutton}>
                            <Text style={styles.vbuttonText}>Copy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.tsvcontainer3_view2}>
                <View style={styles.tscontainer31}>
                    <View style={styles.tsicon_container}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center',
                            backgroundColor: 'transparent', borderRadius: 20, marginTop: 10,
                        }}>
                            <FAIcon name="snowflake"
                                size={28} color="tomato" />
                        </View>
                    </View>
                    <View style={styles.tstext_container}>
                        <Text style={styles.tstop_text}>Freeze card</Text>
                        <Text style={styles.tsfooter_text}>Lock this card temporarily</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection:'row',
                                    justifyContent: 'flex-end', alignItems:'center'}}>               
                        <View style={{ flex: 1, }}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isToggleOn ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isToggleOn}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const PhysicalComponent = () => {
    const [isToggleOn, setToggleOn] = useState(false);

    const toggleSwitch = () => {
        setToggleOn(!isToggleOn);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.tspcontainer3}>
            <View style={styles.tspcontainer3_view1}>
                <View style={styles.tspinnerwrapper11}>
                    <View style={styles.tspcardview1}>
                        <View style={styles.tspcardview1c1}>
                            <Image
                                source={require('../assets/SadapayWhite.png')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.tspcardview1c2}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                                <Text style={styles.dot}>●</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.dotno}>5</Text>
                                <Text style={styles.dotno}>8</Text>
                                <Text style={styles.dotno}>1</Text>
                                <Text style={styles.dotno}>0</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tspcardview2}>
                        <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                            <Text style={styles.dot2}>Exp date</Text>
                            <Text style={styles.dot2}>●</Text>
                            <Text style={styles.dot2}>●</Text>
                            <Text style={styles.dot2}>/</Text>
                            <Text style={styles.dot2}>●</Text>
                            <Text style={styles.dot2}>●</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 52 }}>
                            <Text style={styles.dot}>CVC</Text>
                            <Text style={styles.dot22}>●</Text>
                            <Text style={styles.dot2}>●</Text>
                            <Text style={styles.dot2}>●</Text>
                        </View>
                    </View>
                    <View style={styles.tspcardview3}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Copy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.tspcontainer3_view2}>
                <View style={styles.tscontainer31}>
                    <View style={styles.tsicon_container}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center',
                            backgroundColor: 'transparent', borderRadius: 20, marginTop: 10,
                        }}>
                            <FAIcon name="snowflake"
                                size={26} color="tomato" />
                        </View>
                    </View>
                    <View style={styles.tstext_container}>
                        <Text style={styles.tstop_text}>Freeze card</Text>
                        <Text style={styles.tsfooter_text}>Lock this card temporarily</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <View style={{flex: 1,}}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                                thumbColor={isToggleOn ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isToggleOn}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.tscontainer312}>
                    <View style={styles.tsicon_container}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center',
                            backgroundColor: 'transparent', borderRadius: 20, marginTop: 10,
                        }}>
                            <OIcon name="shield-lock"
                                size={26} color="tomato" />
                        </View>
                    </View>
                    <View style={styles.tstext_container}>
                        <Text style={styles.tstop_text}>Change debit card PIN</Text>
                        <Text style={styles.tsfooter_text}>Update debit card PIN</Text>
                    </View>
                </View>
                <View style={styles.tscontainer313}>
                    <View style={styles.tsicon_container}>
                        <View style={{
                            width: 50, height: 50, alignItems: 'center',
                            backgroundColor: 'transparent', borderRadius: 20, marginTop: 10,
                        }}>
                            <OIcon name="report"
                                size={24} color="tomato" />
                        </View>
                    </View>
                    <View style={styles.tstext_container3}>
                        <Text style={styles.tstop_text}>Report an issue with your card</Text>
                        <Text style={styles.tsfooter_text}>Card is lost, stolen, damaged or compromised</Text>
                    </View>
                </View>
            </View>
        </View> 
        </ScrollView>
    );
};

const MyCards = ({ Personal }) => {
    const navigation = useNavigation();
    const navigateBack = () => {
        if (Personal) {
            navigation.navigate(Personal);
        } else {
            navigation.goBack();
        }
    };

    const [selected, setSelected] = useState('Virtual');

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.iconcontainer}>
                    <TouchableOpacity onPress={navigateBack} style={styles.backButton}>
                        <Icon name="chevron-back" size={30}
                            color="black"
                            style={{ alignSelf: 'flex-start', }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>My cards</Text>
                </View>
            </View>
            <View style={styles.toogle}>
                <View style={styles.tscontainer}>
                    <TouchableOpacity
                        style={[
                            styles.tsoption,
                            selected === 'Virtual' ? styles.tsselectedOption : null
                        ]}
                        onPress={() => setSelected('Virtual')}
                    >
                        <Text style={[styles.tstext, selected === 'Virtual' ? styles.tsselectedText : null]}>Virtual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tsoption,
                            selected === 'Physical' ? styles.tsselectedOption : null
                        ]}
                        onPress={() => setSelected('Physical')}
                    >
                        <Text style={[styles.tstext, selected === 'Physical' ? styles.tsselectedText : null]}>Physical</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.components_view}>
                    {selected === 'Virtual' ? <VirtualComponent /> : null}
                    {selected === 'Physical' ? <PhysicalComponent /> : null}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: 'transparent'
    },
    container1: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    iconcontainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    textcontainer: {
        flex: 3,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        marginLeft: 1,
        
    },
    text: {
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
        marginLeft: 30,
    },
    backButton: {
        backgroundColor: 'transparent'
    },
    toogle: {
        flex: 9,
        backgroundColor: 'transparent'
    },

    //all toogleswitch
    tscontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eaeaea',
        padding: 5,
        borderRadius: 50,
    },
    tsoption: {
        flex: 1,
        alignItems: 'center',
        padding: 7,
        borderRadius: 20,
        borderColor: 'transparent',
    },
    tsselectedOption: {
        borderColor: 'white',
        backgroundColor: '#ffffff',
        elevation: 5,
    },
    tstext: {
        fontSize: 18,
        fontWeight: '800',
    },
    tsselectedText: {
        color: 'black',
    },

    //virtual and physical
    tscontainer31: {
        // flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row', 
    },
    tscontainer312: {
        // flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        

    },
    tscontainer313: {
        // flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
       
    },
    tsicon_container: {
        // flex: 1,
        backgroundColor: 'transparent',
        // marginRight: 10,
    },
    tstext_container: {
        // flex: 1,
        backgroundColor: 'transparent',
        marginTop: 8,
    },
    tstext_container3: {
        width: 230,
        backgroundColor: 'transparent',
        marginTop: 8,
    },
    tstop_text: {
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
    },
    tsfooter_text: {
        fontSize: 16,
        color: 'gray',
    },

    //virtual
    tsvcontainer3: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    tsvinnerwrapper11: {
        flex: 1,
        backgroundColor: '#f2f6f7',
        borderRadius: 20,
        padding: 20,
        margin: 24,
        elevation: 15,
    },
    tsvcontainer3_view1: {
        flex: 2,
        backgroundColor: 'transparent',
        paddingLeft: 44,
        paddingRight: 44,
    },
    tsvcontainer3_view2: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    vcomponents_view: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    vtspcardview1: {
        flex: 2,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    vtspcardview1c1: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    vtspcardview1c2: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    vdot: {
        margin: 6,
        fontSize: 16,
        color: '#849199',
    },
    vdotno: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#849199',
    },
    vtspcardview2: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    vdot2: {
        margin: 6,
        fontSize: 14,
        color: '#849199',

    },
    vdot22: {
        margin: 6,
        fontSize: 14,
        color: '#849199',
        paddingLeft: 24,
    },
    vtspcardview3: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vbutton: {
        backgroundColor: '#849199',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 86,
        margin: 5,
    },
    vbuttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    vimage: {
        width: 32,
        height: 36,
        marginTop: 10,
        marginLeft: 5,
    },
    vtext: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 2,
    },


    //physical
    tspcontainer3: {
        flex: 1,
        backgroundColor: 'transparent',
        // borderWidth: 3,
    },
    tspinnerwrapper11: {
        flex: 1,
        backgroundColor: '#01dfba',
        // backgroundColor: 'red',
        borderRadius: 20,
        padding: 20,
        margin: 24,
        elevation: 15,
    },
    tspcontainer3_view1: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingLeft: 44,
        paddingRight: 44,
    },
    tspcontainer3_view2: {
        flex: 1,
        backgroundColor: 'transparent',
        
    },


    components_view: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    tspcardview1: {
        flex: 2,
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    tspcardview1c1: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    tspcardview1c2: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    dot: {
        margin: 6,
        fontSize: 16,
        color: 'white',
    },
    dotno: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    tspcardview2: {
        flex: 1,
        backgroundColor: 'transparent', 
    },
    dot2: {
        margin: 6,
        fontSize: 14,
        color: 'white',
       
    },
    dot22: {
        margin: 6,
        fontSize: 14,
        color: 'white',
        paddingLeft: 24,
    },
    tspcardview3: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 19,
        marginBottom: 8
    },
    button: {
        backgroundColor: '#005244',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 86,
        margin: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    image: {
        width: 32,
        height: 36,
        marginTop: 10,
        marginLeft: 5,
    },
});

export default MyCards;