import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { LoginScreen, HomeScreen, RegistrationScreen, JournalScreen, JournalItemScreen } from "./src/screens";
import { decode, encode } from "base-64";
import { firebase } from "./src/firebase/config";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usersRef = firebase.firestore().collection("users");
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, []);

  const tabs = (
    <Tab.Navigator initialRouteName="Journal">
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} extraData={user} />}
      </Tab.Screen>
      <Tab.Screen name="Journal" component={JournalScreen} />
      <Tab.Screen name="JournalItem" component={JournalItemScreen} />
    </Tab.Navigator>
  );

  if (loading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" children={() => (user ? tabs : null)} /> */}
        <Stack.Screen name="Home" children={() => tabs} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
