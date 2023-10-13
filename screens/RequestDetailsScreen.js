import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import IconButton from "../components/buttons/IconButton";
import BackButton from "../components/buttons/BackButton";

const screenDimensions = Dimensions.get("screen");
console.log(screenDimensions);

const RequestDetailsScreen = () => {
  return (
    <>
      <View style={styles.RequestDetails__navigation}>
        <BackButton />
        <View style={styles.RequestDetails__rightNavigation}>
          <IconButton icon='bookmark-outline' />
          <IconButton icon='ellipsis-horizontal' />
        </View>
      </View>
      <ScrollView></ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  RequestDetails__navigation: {
    position: "absolute",
    zIndex: 10,
    width: screenDimensions.width,
    paddingTop: 52,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  RequestDetails__rightNavigation: {
    flexDirection: "row",
    gap: 16,
  },
});

export default RequestDetailsScreen;
