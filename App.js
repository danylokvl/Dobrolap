import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

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
        <StatusBar style='auto' />

        <BottomTabs.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: COLORS.backgroundVariant,
              height: 80,
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
                  <Ionicons
                    name={focused ? "home-sharp" : "home-outline"}
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
                  <Ionicons
                    name={
                      focused
                        ? "chatbox-ellipses-sharp"
                        : "chatbox-ellipses-outline"
                    }
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
            name='Requests'
            component={RequestsScreen}
            options={{
              title: "Тварини",
              tabBarIcon: ({ size, focused }) => (
                <>
                  <Ionicons
                    name={focused ? "paw-sharp" : "paw-outline"}
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
                  <Ionicons
                    name={focused ? "person-sharp" : "person-outline"}
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
    backgroundColor: COLORS.primary,
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
