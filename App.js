import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  DiceSix,
  Display4K,
  HomeSimpleDoor,
  Iconoir,
} from "iconoir-react-native";

import { COLORS } from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import RequestsScreen from "./screens/RequestsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const BottomTabs = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "fixelDisplay-bold": require("./assets/fonts/fixelDisplay-bold.ttf"),
    "fixelDisplay-semiBold": require("./assets/fonts/fixelDisplay-semiBold.ttf"),
    "fixelDisplay-medium": require("./assets/fonts/fixelDisplay-medium.ttf"),
    "fixelDisplay-regular": require("./assets/fonts/fixelDisplay-regular.ttf"),
    "fixelText-bold": require("./assets/fonts/fixelText-bold.ttf"),
    "fixelText-semiBold": require("./assets/fonts/fixelText-semiBold.ttf"),
    "fixelText-medium": require("./assets/fonts/fixelText-medium.ttf"),
    "fixelText-regular": require("./assets/fonts/fixelText-regular.ttf"),
  });

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
            tabBarIcon: () => (
              <Iconoir
                name={Display4K}
                width={24}
                height={24}
                color={COLORS.onBackgroundVariant}
              />
            ),
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
