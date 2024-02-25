import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RNGestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Personal from './Screens/Personal';
import Payments from './Screens/Payments';
import More from './Screens/More';
import MyCards from './Screens/MyCards';
import Virtual from './Screens/Virtual';
import Physical from './Screens/Physical';
import MoneyRequests from './Screens/MoneyRequests';
import MobileTopUp from './Screens/MobileTopUp';
import BillsUtilities from './Screens/BillsUtilities';
import ManageDevices from './Screens/ManageDevices';
import MoneySentReceipt from './Screens/MoneySentReceipt';
import LoadMoney from './Screens/LoadMoney';
import SendRequest from './Screens/SendRequest';
import RequestMoney from './Screens/RequestMoney';
import SendMoney from './Screens/SendMoney';

// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tab1 = () => (
  <Stack.Navigator>
    <Stack.Screen name="PersonalScreen" component={Personal} options={{ headerShown: false }} />
    <Stack.Screen name="MyCards" component={MyCards} options={{ headerShown: false }} />
    <Stack.Screen name="Virtual" component={Virtual} options={{ headerShown: false }} />
    <Stack.Screen name="Physical" component={Physical} options={{ headerShown: false }} />
    {/* <Stack.Screen name="Receipt" component={MoneySentReceipt} options={{ headerShown: false}} /> */}
    <Stack.Screen name="LoadMoney" component={LoadMoney} options={{ headerShown: false}} />
    <Stack.Screen name="SendRequest" component={SendRequest} options={{ headerShown: false }} />
    <Stack.Screen name="RequestMoney" component={RequestMoney} options={{ headerShown: false }} />
    <Stack.Screen name="SendMoney" component={SendMoney} options={{ headerShown: false, }} />
  </Stack.Navigator>
);

const Tab2 = () => (
  <Stack.Navigator>
    <Stack.Screen name="PaymentsScreen" component={Payments} options={{ headerShown: false }} />
    <Stack.Screen name="BillsUtilities" component={BillsUtilities} options={{ headerShown: false }} />
    <Stack.Screen name="MobileTopUp" component={MobileTopUp} options={{ headerShown: false }} />
    <Stack.Screen name="MoneyRequests" component={MoneyRequests} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const Tab3 = () => (
  <Stack.Navigator>
    <Stack.Screen name="MoreScreen" component={More} options={{ headerShown: false }} />
    <Stack.Screen name="ManageDevices" component={ManageDevices} options={{ headerShown: false }} />
  
  </Stack.Navigator>
);

// Define your bottom tab navigator
const AppTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: { height: 60 },
      tabBarLabelStyle: {
        fontSize: 18,
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen
      name="Personal"
      component={Tab1}
      options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? 'tomato' : 'gray';
          return <Icon name="home-filled" size={30} color={iconColor} />
        }
      })}
    />
    <Tab.Screen
      name="Payments"
      component={Tab2}
      options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? 'tomato' : 'gray';
          return <Icon name="payments" size={30} color={iconColor} />;
        }
      })}
    />
    <Tab.Screen
      name="More"
      component={Tab3}
      options={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? 'tomato' : 'gray';
          return <OctIcon name="three-bars" size={30} color={iconColor} />;
        }
      })}
    />
  </Tab.Navigator>
);

// Create a main stack navigator to handle the initial splash and login screens
const MainStack = () => (
  <Stack.Navigator>
    {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} /> */}
    {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
    <Stack.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => (
   <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </GestureHandlerRootView>
);

export default App;