import { View, StyleSheet } from "react-native";
import Body14 from "../typography/Body14";
import Check from "./Check";

const CheckListItem = ({ children }) => {
  return (
    <View style={styles.checkListItem}>
      <Body14>{children}</Body14>
      <Check />
    </View>
  );
};

const styles = StyleSheet.create({
  checkListItem: {
    flexDirection: "row",
    columnGap: 60,
    alignItems: "center",
  },
});

export default CheckListItem;
