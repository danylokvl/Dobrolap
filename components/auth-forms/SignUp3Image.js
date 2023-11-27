import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";

const SignUp3Image = ({ pickedImageUri }) => {
  return (
    <View style={styles.circle}>
      {pickedImageUri !== null ? (
        <Image
          source={{ uri: pickedImageUri }}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <MaterialCommunityIcons
          name='account'
          color={COLORS.onBackgroundVariant}
          size={120}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    backgroundColor: COLORS.backgroundVariant,
    width: 280,
    height: 280,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default SignUp3Image;
