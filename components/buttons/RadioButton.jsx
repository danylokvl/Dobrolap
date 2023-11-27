import { Pressable, View } from "react-native";
import { useEffect, useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import Body14 from "../typography/Body14";

const RadioButton = ({ children, isChosen, onPress }) => {
  const [icon, setIcon] = useState({
    name: "radiobox-blank",
    color: COLORS.onBackground,
  });

  useEffect(() => {
    if (isChosen) setIcon({ name: "radiobox-marked", color: COLORS.primary });
    else setIcon({ name: "radiobox-blank", color: COLORS.onBackground });
  }, [isChosen]);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", columnGap: 8 }}>
      <Pressable
        onPressOut={() => onPress()}
        android_ripple={{
          color: COLORS.primaryContainer,
          borderless: true,
          radius: 24,
        }}
      >
        <MaterialCommunityIcons name={icon.name} color={icon.color} size={24} />
      </Pressable>
      <Body14>{children}</Body14>
    </View>
  );
};

export default RadioButton;
