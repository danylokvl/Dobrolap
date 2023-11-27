import { useState } from "react";
import { Pressable } from "react-native";

import LabelLarge from "../typography/LabelLarge";
import { COLORS } from "../../constants/colors";

const TextButton = ({ children, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <LabelLarge
        color={isPressed ? COLORS.secondary : COLORS.primary}
        additionalStyles={{ textAlign: "center" }}
      >
        {children}
      </LabelLarge>
    </Pressable>
  );
};

export default TextButton;
