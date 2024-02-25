import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OctIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Personal from "./Personal";
import Payments from "./Payments";
import More from "./More";
import ManageDevces from './ManageDevices';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const TabScreens = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <NavigationContainer independent={true}>
                <Tab.Navigator
                    screenOptions={() => ({
                        headerShown: false,
                        tabBarStyle: { height: 60, },
                        tabBarLabelStyle: {
                            fontSize: 18,
                            color: 'tomato',
                        },
                    })}
                >
                    <Tab.Screen
                        name="Personal"
                        component={Personal}
                        options={{
                            tabBarIcon: () => <Icon name="home-filled" size={30} color="tomato" />
                        }}
                    />
                    <Tab.Screen
                        name="Payments"
                        component={Payments}
                        options={{
                            tabBarIcon: () => <Icon name="payments" size={30} color="tomato" />
                        }}
                    />
                    <Tab.Screen
                        name="More"
                        component={More}
                        options={{
                            tabBarIcon: () => <OctIcon name="three-bars" size={30} color="tomato" />
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default TabScreens;