import { StyleSheet, View, Image, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import LabelLarge from "../components/typography/LabelLarge";
import Body14 from "../components/typography/Body14";
import { COLORS } from "../constants/colors";
import Body12 from "./typography/Body12";
import { useState } from "react";

const RightArrowBlock = ({ showPerson, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
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
      <Body14 color={isPressed ? COLORS.onPrimaryContainer : null}>
        12 людей
      </Body14>
    </View>
  );

  if (showPerson)
    content = (
      <View style={styles.RightArrowBlock__imageAndText}>
        <Image
          style={styles.RightArrowBlock__image}
          source={require("../assets/images/dummyImages/dmytro-ostapenko.jpg")}
        />
        <View>
          <LabelLarge color={isPressed ? COLORS.onPrimaryContainer : null}>
            Дмитро Остапенко
          </LabelLarge>
          <Body12
            color={
              isPressed ? COLORS.onPrimaryContainer : COLORS.onBackgroundVariant
            }
          >
            Волонтер
          </Body12>
        </View>
      </View>
    );

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
    >
      <View
        style={
          isPressed
            ? [
                styles.RightArrowBlock__content,
                { backgroundColor: COLORS.primaryContainer },
              ]
            : styles.RightArrowBlock__content
        }
      >
        {content}

        <MaterialIcons
          name='arrow-forward'
          size={24}
          color={
            isPressed ? COLORS.onPrimaryContainer : COLORS.onBackgroundVariant
          }
        />
      </View>
    </Pressable>
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
