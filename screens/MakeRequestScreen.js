import { Text, View, StyleSheet } from "react-native";

const MakeRequestScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, you are on the MakeRequestScreen !</Text>
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

export default MakeRequestScreen;
