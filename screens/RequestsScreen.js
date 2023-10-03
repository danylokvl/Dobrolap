import { Text, View, StyleSheet } from "react-native";

const RequestsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, you are on the Requests Screen !</Text>
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

export default RequestsScreen;
