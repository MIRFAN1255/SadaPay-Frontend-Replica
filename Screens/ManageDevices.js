import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import ETIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { startMapper } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ManageDevces = ({ More }) => {
    const navigation = useNavigation();
   
    const navigateBack = () => {
        if (More) {
            navigation.navigate(More);
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.icon_wrapper}>
                <TouchableOpacity onPress={navigateBack} >
                    <IIcon name="chevron-back"
                        size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.text_wrapper1}>
                <Text style={styles.text}>
                    Device Management
                </Text>
            </View>
            <View style={styles.container01}>
                <Text style={styles.container01_text}>
                    YOUR DEVICES
                </Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.icon_container}>
                    <View style={{
                        width: 50, height: 50, alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff2f1',
                        borderRadius: 20,
                        marginLeft: 20,
                    }}>
                        <AIcon name="android1"
                            size={25} color="#ff7b66" />
                    </View>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.top_text}>RMX1236</Text>
                    <Text style={styles.footer_text}>Current Device</Text>
                </View>
            </View>
            <View style={styles.text_wrapper2}>
                <View style={styles.container_bottom}>
                    <Text style={styles.logout_text}>
                        Logout from all devices
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
        justifyContent: 'flex-start',
        verticalAlign: 'bottom',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'transparent',
    },
    text_wrapper1: {
        flex: 2,
        margin: 15,
        padding: 5,
        backgroundColor: 'transparent',
    },
    text_wrapper2: {
        flex: 16,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 32,
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
    container01: {
        flex: 1,
        marginLeft: 22,
    },
    container01_text: {
        fontSize: 18,
    },

    container1: {
        flex: 3,
        backgroundColor: 'transparent',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    icon_container: {
        flex: 0.3,
        backgroundColor: 'transparent',
    },
    text_container: {
        flex: 1,
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    top_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    footer_text: {
        fontSize: 16,
        color: '#01d3b0',
        marginTop: 0,
    },
    container_bottom: {
        flex: 0.13,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
    logout_text: {
        color: 'tomato',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default ManageDevces;