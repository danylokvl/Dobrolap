import { Iconoir } from "iconoir-react-native";
import { Pressable } from "react-native";

const IconButton = ({ onPress, iconName, color }) => {
  return (
    <Pressable onPress={onPress}>
      <Iconoir name={iconName} color={color} width={24} height={24} />
    </Pressable>
  );
};

export default IconButton;
