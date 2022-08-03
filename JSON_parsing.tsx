import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import city from "./city.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useScrollToTop } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

export default function Parsing() {
  //  const stringData = '["name","John", "birth","1986-12-14", "city","New York"]';
  //  const stringArr = JSON.parse(stringData);
  //

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
    console.log(data);
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, i }) => (
          <View style={styles.row} key={i}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View>
              <Text style={styles.textCus}>
               
                {item.first_name} {item.last_name}
              </Text>

              <Text style={{ padding: 10 }}> {item.email}</Text>
            </View>
          </View>
        )}
        //      {/*{city.city.map((list, l) => (
        //        <View key={l} >
        //          <Text style={styles.textCus}>
        //            {list.city}  ,
        //            {list.id} ,
        //            {list.country}
        //
        //          </Text>
        //
        //      </View>
        //      ))}
        //      {stringArr.map((info, t) => (
        //        <View key={t}>
        //          <Text style={styles.textCus}>
        //            {info}
        //          </Text>
        //        </View>
        //      ) )}*/}
        //
        //
        //      {/*<View >
        //        <Text> JSON Parsing</Text>
        //      </View>*/}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginTop: -30,
  },
  textCus: {
    fontSize: 20,
    padding: 10,
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
