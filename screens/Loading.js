import { View, StyleSheet, Text } from "react-native";
import Headline from "../components/typography/Headline";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Headline>Loading...</Headline>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Loading;
