import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useFonts } from "expo-font";
import Headline from "./components/typography/Headline";

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
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Headline>Добролап</Headline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
