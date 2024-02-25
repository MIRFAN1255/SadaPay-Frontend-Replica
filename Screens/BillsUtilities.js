import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import ETIcon from 'react-native-vector-icons/Entypo';
import IIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const BillsUtilities = ({PaymentsScreen}) => {
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
                    <IIcon name="chevron-back"
                        size={30} color="black" />
            </TouchableOpacity>
            </View>
           
            <View style={styles.text_wrapper1}>
                <Text style={styles.text}>
                    Bills & utilities
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
                    <Text style={styles.top_text}>New bill payment</Text>
                    <Text style={styles.footer_text}>Pay your bills to 900+ companies in pakistan</Text>
                </View>
            </View>
            <View style={styles.text_wrapper2}>
                <View style={{
                    width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'transparent', borderRadius: 20, marginRight: 20
                }}>
                    <FAIcon name="search"
                        size={50} color="black" />
                </View>
                <Text style={styles.npr_text}>
                    no reccent bills
                </Text>
                <View style={{ backgroundColor: 'transparent', padding: 50, paddingTop: 0 }}>
                    <Text style={styles.npr_text1}>
                        Pay a new bill to view it here
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
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
        flex: 4,
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15,
        elevation: 20,
    },
    icon_container: {
        flex: 0.3,
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    text_container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 8,
        marginRight: 10,
        marginTop: 10,
    },
    top_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    footer_text: {
        fontSize: 16,
        color: 'gray',
        marginTop: 8,
    },
})

export default BillsUtilities;