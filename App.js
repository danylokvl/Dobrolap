import { useEffect, useState } from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { COLORS } from "./constants/colors";
import Loading from "./screens/Loading";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import RequestsScreen from "./screens/RequestsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "FixelDisplay-Bold": require("./assets/fonts/FixelDisplay-Bold.ttf"),
    "FixelDisplay-SemiBold": require("./assets/fonts/FixelDisplay-SemiBold.ttf"),
    "FixelDisplay-Medium": require("./assets/fonts/FixelDisplay-Medium.ttf"),
    "FixelDisplay-Regular": require("./assets/fonts/FixelDisplay-Regular.ttf"),
    "FixelText-Bold": require("./assets/fonts/FixelText-Bold.ttf"),
    "FixelText-SemiBold": require("./assets/fonts/FixelText-SemiBold.ttf"),
    "FixelText-Medium": require("./assets/fonts/FixelText-Medium.ttf"),
    "FixelText-Regular": require("./assets/fonts/FixelText-Regular.ttf"),
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.backgroundVariant,
          },
        }}
      >
        <BottomTabs.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: "Прихисток",
          }}
        />
        <BottomTabs.Screen
          name='Chat'
          component={ChatScreen}
          options={{
            title: "Чати",
          }}
        />
        <BottomTabs.Screen
          name='Requests'
          component={RequestsScreen}
          options={{
            title: "Допомога",
          }}
        />
        <BottomTabs.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            title: "Профіль",
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}
