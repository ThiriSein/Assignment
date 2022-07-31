// Drawer.Screen using "createDrawerNavigator"

import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingStack from './HomeStack';
import Restore from './Restore';
 
const Tab = createBottomTabNavigator();
function Home() {
  return (
    
    <SettingStack/>
    );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#e3b39f', }}>Profile Screen</Text>
      
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "violet",
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
      }} >

      <Drawer.Screen name="Home" component={Home}
        options={({ navigation }: any) => ({
          headerTitle: "Seattle Consulting Myanmar",
          headerStyle: {
            height: 100,
          },
          headerTintColor: '#364c75',
          
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={ color} />
          ),
        })}
      />
      <Drawer.Screen name="Favourite" component={Profile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={22} color={ color} />
          ),
          headerStyle: {
            backgroundColor: '#e3b39f',
            height: 100,
          },
          headerTintColor: 'black',
        }}
      />
       
      <Drawer.Screen name="Register " component={Restore}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="save-outline" size={22} color={ color} />
          ),
          headerStyle: {
            backgroundColor: '#abd9d2',
            height: 100,
          },
          headerTintColor: 'black',
        }}
      />
    </Drawer.Navigator>
  );
}

export default function DrawerSlider() {
  return (
    <NavigationContainer>
      <MyDrawer />

    </NavigationContainer>
  );
}
