import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "./constants/colors";
import Loading from "./screens/Loading";
import HomeScreen from "./screens/home/HomeScreen";
import ChatScreen from "./screens/chat/ChatScreen";
import HelpScreenNavigator from "./screens/help/HelpScreenNavigator";
import ProfileScreen from "./screens/account/ProfileScreen";

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

  const DobrolapTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.background,
    },
  };

  return (
    <View style={styles.container}>
      <NavigationContainer theme={DobrolapTheme}>
        <StatusBar backgroundColor={COLORS.background} />

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
                    color={
                      focused ? COLORS.primary : COLORS.onBackgroundVariant
                    }
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
                    color={
                      focused ? COLORS.primary : COLORS.onBackgroundVariant
                    }
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
                    color={
                      focused ? COLORS.primary : COLORS.onBackgroundVariant
                    }
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
                    color={
                      focused ? COLORS.primary : COLORS.onBackgroundVariant
                    }
                    size={size}
                  />
                  <View style={focused ? styles.focusedItem : null} />
                </>
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  focusedItem: {
    position: "absolute",
    zIndex: -10,
    width: 64,
    height: 32,
    borderRadius: 20,
    backgroundColor: "#F3FFF8",
  },
});
