import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Headline from "../../components/typography/Headline";
import IconButton from "../../components/buttons/IconButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Headline>Hello, you are on the home Screen !</Headline>
      <MaterialIcons name='volunteer-activism' size={24} color='black' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 16,
  },
});

export default HomeScreen;
