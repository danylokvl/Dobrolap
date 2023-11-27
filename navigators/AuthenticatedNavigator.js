import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../constants/colors";
import HomeScreen from "../screens/home/HomeScreen";
import ChatScreen from "../screens/chat/ChatScreen";
import HelpScreenNavigator from "./HelpScreenNavigator";
import ProfileScreen from "../screens/account/ProfileScreen";

const BottomTabs = createBottomTabNavigator();
const AuthenticatedNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.backgroundVariant,
          height: 74,
          paddingBottom: 12,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.onBackgroundVariant,
        tabBarLabelStyle: {
          fontFamily: "FixelDisplay-Bold",
          fontSize: 12,
        },
      }}
    >
      <BottomTabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "Прихисток",
          tabBarIcon: ({ size, focused }) => (
            <>
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={focused ? COLORS.primary : COLORS.onBackgroundVariant}
                size={size}
              />
              <View style={focused ? styles.focusedItem : null} />
            </>
          ),
        }}
      />
      <BottomTabs.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          title: "Чати",
          tabBarIcon: ({ size, focused }) => (
            <>
              <MaterialCommunityIcons
                name={focused ? "chat" : "chat-outline"}
                color={focused ? COLORS.primary : COLORS.onBackgroundVariant}
                size={size}
              />
              <View style={focused ? styles.focusedItem : null} />
            </>
          ),
        }}
      />
      <BottomTabs.Screen
        name='Help'
        component={HelpScreenNavigator}
        options={{
          title: "Допомога",
          tabBarIcon: ({ size, focused }) => (
            <>
              <MaterialCommunityIcons
                name={focused ? "hand-heart" : "hand-heart-outline"}
                color={focused ? COLORS.primary : COLORS.onBackgroundVariant}
                size={size}
              />
              <View style={focused ? styles.focusedItem : null} />
            </>
          ),
        }}
      />
      <BottomTabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: "Профіль",
          tabBarIcon: ({ size, focused }) => (
            <>
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                color={focused ? COLORS.primary : COLORS.onBackgroundVariant}
                size={size}
              />
              <View style={focused ? styles.focusedItem : null} />
            </>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  focusedItem: {
    position: "absolute",
    zIndex: -10,
    width: 64,
    height: 32,
    borderRadius: 20,
    backgroundColor: "#F3FFF8",
  },
});

export default AuthenticatedNavigator;
