import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text,StyleSheet, Button, Image } from 'react-native';
import DATA from "./data";
import { Entypo, Feather } from '@expo/vector-icons';
import Detail from "./details";
import LeadD from "./leaderD";
import ManaD from "./manager";

function All() {
  return (
    <View style={styles.container}>   
      <DATA/>
    </View>
  );
}

function Manager() {
  return (
    <View style={styles.container}>
      <ManaD/>
    </View>
  );
}
function BSE() {
  return (
    <View style={styles.container}>
     <View style={{ flexDirection: "row", backgroundColor: '#fff', borderRadius: 20, marginBottom: 20, }}>
          <Image
            source={require('../assets/pro.jpg')}
            style={{ width: 50, height: 40, margin: 10, }}
          />
          <View style={styles.column}>
            <Text> Yumi Ko</Text>
            <Text style={{ color: 'gray', }}> BSE </Text>
          </View>
          <Ionicons name="star-outline" size={22} style={{ margin: 10, paddingRight: 20, }} />
          <Ionicons name="call-outline" size={22} style={{ margin: 10, paddingRight: 10, }} />
        </View>
    </View>
  );
}
function Leader() {
  return (
    <View style={styles.container}>
          <LeadD/>
    </View>
  );
}

function Details() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#e3b39f', }}>Details Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="All" component={All}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Manager" component={Manager}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name="phone" size={size} color={color} />
        )
        }}
      />
      <Tab.Screen name="name" component={Details}
      
        options={{
          tabBarLabel: "",
        tabBarIcon: ({ size, color }) => (
          <Detail size={size} color={color} />
        )
        }}
      />
      <Tab.Screen name="BSE" component={BSE}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Entypo name="star" size={size} color={color} />
        )
        }}
      />
      <Tab.Screen name="Leader" component={Leader}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="search" size={size} color={color} />
        )
        }}
      />
    </Tab.Navigator>
  );
}


const SettingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      
    screenOptions={{
        headerShown: false,
    }}
    >
      <Stack.Screen name="MyTabs" component={MyTabs} /> 

    </Stack.Navigator>
  );
};
export default SettingStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  column: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },

});
