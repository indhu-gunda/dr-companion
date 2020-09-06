import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useFontsPoppins,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  useFonts as useFontsOpenSans,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import { Ionicons } from "@expo/vector-icons";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  JournalScreen,
  ChartsScreen,
} from "./src/screens";
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
  const [fontsLoadedPoppins] = useFontsPoppins({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  const [fontsLoadedOpenSans] = useFontsOpenSans({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

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
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={ChartsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="md-home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="ios-book" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="md-settings" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );

  if (loading || !fontsLoadedPoppins || !fontsLoadedOpenSans) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Dr. Companion" children={() => (user ? tabs : null)} />
        {/* <Stack.Screen name="Dr. Companion" children={() => tabs} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
