import React, { useContext, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

var userDetailContext = React.createContext(null);

export default function userDetailComponent() {
  var [useDeatils] = useState({
    name: "Shwe War",
    age: 20,
    type: "cat",
  });

  return (
    <userDetailContext.Provider value={useDeatils}>
      <Text> This is the Parent Component </Text>
      <ChildComponent userDetails={useDeatils} />
    </userDetailContext.Provider>
  );
}

function ChildComponent(props) {
  return (
    <View>
      <Text> This is Child Component </Text>
      <SubChildComponent />
    </View>
  );
}

function SubChildComponent(props) {
  var contextData = useContext(userDetailContext);

  return (
    <View style={styles.container}>
      <Text> This is Sub Child Component </Text>
      <Text style={styles.cat}> User Name : {contextData.name}</Text>
      <Text style={styles.cat}> User Age : {contextData.age}</Text>
      <Text style={styles.cat}> User Type : {contextData.type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    
        paddingTop: 20,

    },
  cat: {
      fontWeight: 'bold',
      paddingTop: 10,
  },
});
