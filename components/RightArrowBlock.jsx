import { StyleSheet, View, Image, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import LabelLarge from "../components/typography/LabelLarge";
import Body14 from "../components/typography/Body14";
import { COLORS } from "../constants/colors";
import Body12 from "./typography/Body12";

const RightArrowBlock = ({ showAuthor }) => {
  let content = (
    <View style={styles.RightArrowBlock__imagesAndCount}>
      <View style={styles.RightArrowBlock__images}>
        <Image
          style={styles.RightArrowBlock__image}
          source={require("../assets/images/dummyImages/artem.png")}
        />
        <Image
          style={styles.RightArrowBlock__image}
          source={require("../assets/images/dummyImages/andrii.png")}
        />
        <Image
          style={styles.RightArrowBlock__image}
          source={require("../assets/images/dummyImages/alina.png")}
        />
      </View>
      <Body14>12 людей</Body14>
    </View>
  );

  if (showAuthor)
    content = (
      <View style={styles.RightArrowBlock__imageAndText}>
        <Image
          style={styles.RightArrowBlock__image}
          source={require("../assets/images/dummyImages/dmytro-ostapenko.jpg")}
        />
        <View>
          <LabelLarge>Дмитро Остапенко</LabelLarge>
          <Body12 grey>Волонтер</Body12>
        </View>
      </View>
    );

  return (
    <View>
      <View style={styles.RightArrowBlock__content}>
        {content}
        <Pressable
          style={({ pressed }) => [{ color: pressed ? COLORS.primary : null }]}
        >
          <MaterialIcons
            name='arrow-forward'
            size={24}
            color={COLORS.onBackgroundVariant}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RightArrowBlock__content: {
    borderRadius: 12,

    padding: 8,
    backgroundColor: COLORS.neutral95,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  RightArrowBlock__imagesAndCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  RightArrowBlock__images: {
    flexDirection: "row",
    gap: -10,
  },
  RightArrowBlock__image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  RightArrowBlock__imageAndText: {
    flexDirection: "row",
    gap: 12,
  },
});

export default RightArrowBlock;
