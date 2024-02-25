import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Modal, TouchableOpacity, PanResponder, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import IIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import BillsUtilities from './BillsUtilities';
import MobileTopUp from './MobileTopUp';

const Payments = ({ route, navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const MobileTopUp = () => {
        navigation.navigate('MobileTopUp');
    };
    const BillsUtilities = () => {
        navigation.navigate('BillsUtilities');
    };
    const MoneyRequests = () => {
        navigation.navigate('MoneyRequests');
    };

    useFocusEffect(
        React.useCallback(() => {
            const isPaymentsScreen = route.name === 'PaymentsScreen';
            setModalVisible(isPaymentsScreen);

            return () => {
                setModalVisible(false); // Ensure the modal is closed when leaving the screen
            };
        }, [route])
    );

    useEffect(() => {
        const backHandler = () => {
            if (isModalVisible) {
                setModalVisible(false);
                return true; // Prevent default back behavior
            }
            return false;
        };

        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            if (isModalVisible) {
                e.preventDefault();
            }
        });

        const backSubscription = BackHandler.addEventListener('hardwareBackPress', backHandler);

        return () => {
            backSubscription.remove(); // Remove the hardware back press listener
            unsubscribe(); // Remove the navigation listener
        };
    }, [isModalVisible, navigation]);

    const closeModal = () => {
        setModalVisible(false);
    };

    const panResponder = React.useMemo(
        () =>
            PanResponder.create({
                onMoveShouldSetPanResponderCapture: (evt, gestureState) => gestureState.dy > 5,
                onPanResponderRelease: (evt, gestureState) => {
                    if (gestureState.dy > 50) {
                        setModalVisible(false);
                    }
                },
            }),
        []
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={closeModal}
        >
            <View
                style={styles.modalContainer}
                {...(isModalVisible ? panResponder.panHandlers : {})}
            >
                <View style={styles.mainwrapper}>
                    <View style={styles.innerwrapper}>
                        <View style={styles.payment_container}>
                            <Text style={styles.payment_text}>Payments</Text>
                        </View>
                        <View style={styles.container1}>
                            <TouchableOpacity style={styles.container_touchable} onPress={MobileTopUp}>
                            <View style={styles.icon_container}>
                                <View
                                    style={{
                                        width: 50,
                                        height: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#fff2f1',
                                        borderRadius: 20,
                                        marginRight: 20,
                                    }}
                                >
                                    <IIcon name="phone-portrait-outline" size={25} color="#ff7b66" />
                                </View>
                            </View>
                            <View style={styles.text_container}>
                                <Text style={styles.top_text}>Mobile top up</Text>
                                <Text style={styles.footer_text}>Instantly top up your mobile.</Text>
                            </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.container2}>
                            <TouchableOpacity style={styles.container_touchable} onPress={BillsUtilities}>
                            <View style={styles.icon_container}>
                                <View style={{
                                    width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                                    backgroundColor: '#fff2f1', borderRadius: 20, marginRight: 20
                                }}>
                                    <MCIcon name="text-box-outline"
                                        size={25} color="#ff7b66" />
                                </View>
                            </View>
                            <View style={styles.text_container}>
                                <Text style={styles.top_text}>Bills & utilities</Text>
                                <Text style={styles.footer_text}>Pay for your utilities.</Text>
                            </View>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.container3}>
                            <TouchableOpacity style={styles.container_touchable} onPress={MoneyRequests}>
                            <View style={styles.icon_container}>
                                <View style={{
                                    width: 50, height: 50, alignItems: 'center', justifyContent: 'center',
                                    backgroundColor: '#fff2f1', borderRadius: 20, marginRight: 20
                                }}>
                                    <FAIcon name="money"
                                        size={25} color="#ff7b66" />
                                </View>
                            </View>
                            <View style={styles.text_container}>
                                <Text style={styles.top_text}>Money requests</Text>
                                <Text style={styles.footer_text}>Review pending money requests.</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
            
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    mainwrapper: {
        justifyContent: 'flex-end',
    },
    innerwrapper: {
        backgroundColor: 'white',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        padding: 16,
        height: 390,
    },
    payment_container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginBottom: 10,
        marginTop: 10,
    },
    payment_text: {
        fontSize: 34,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        color: 'black',
    },
    container1: {
        flex: 1,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container_touchable: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container3: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon_container: {
        flex: 0.2,
        backgroundColor: 'transparent',
        marginRight: 10,
    },
    text_container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    top_text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    footer_text: {
        fontSize: 18,
        color: 'gray',
    },
});

export default Payments;
