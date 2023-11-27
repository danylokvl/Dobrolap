import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { COLORS } from "./constants/colors";
import Loading from "./screens/Loading";
import AuthenticatedNavigator from "./navigators/AuthenticatedNavigator";
import AuthenticationNavigator from "./navigators/AuthenticationNavigator";

const authenticated = false;

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
    <NavigationContainer theme={DobrolapTheme}>
      <StatusBar backgroundColor={COLORS.background} />
      {authenticated ? <AuthenticatedNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
}
