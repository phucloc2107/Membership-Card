import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import MyIDScreen from '../screens/MyIDScreen';
import GiftScreen from '../screens/GiftScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { ...styles.tabBar },
            tabBarActiveTintColor: '#EEA47F'
        }}>
            <Tab.Screen
                name="Home" component={HomeScreen}
                options={{
                    title: 'Trang chủ',
                    tabBarIcon: ({ focused }) => (
                        <Icon name='home' size={25} color={focused ? '#EEA47F' : 'black'} />)
                }}
            />

            <Tab.Screen
                name="User" component={UserScreen}
                options={{
                    title: 'Thông tin',
                    tabBarIcon: ({ focused }) => (
                        <Icon name='user' size={25} color={focused ? '#EEA47F' : 'black'} />)
                }}
            />

            <Tab.Screen
                name="ID" component={MyIDScreen}
                options={{
                    title: 'My ID',
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity style={styles.btnIcon} onPress={() => { navigation.navigate('ID') }}>
                            <Image source={require('../assets/avatar.jpg')} style={styles.Icon} />
                        </TouchableOpacity>
                    )
                }}
            />

            <Tab.Screen
                name="Gift" component={GiftScreen}
                options={{
                    title: 'Quà',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name='gift' size={25} color={focused ? '#EEA47F' : 'black'} />)
                }}
            />

            <Tab.Screen
                name="Notification" component={NotificationScreen}
                options={{
                    title: 'Thông báo',
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons name='bell' size={25} color={focused ? '#EEA47F' : 'black'} />)
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabs;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#e5e6e4',
        margin: 20,
        height: 50,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: { width: 10, height: 10 }
    },
    btnIcon: {
        width: 75,
        height: 75,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icon: {
        width: 25,
        height: 25,
    }
})