import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";
import Headline from "../../components/typography/Headline";
import Body16 from "../../components/typography/Body16";
import LabelSemiBold from "../../components/typography/LabelSemiBold";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const ThankYouScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        <View style={styles.circleContainer}>
          <MaterialCommunityIcons
            name='check'
            size={52}
            color={COLORS.onPrSecTertErr}
          />
        </View>
        <Headline
          color={COLORS.primary}
          additionalStyles={{ fontSize: 28, marginBottom: 12 }}
        >
          Дякуємо!
        </Headline>
        <LabelSemiBold>Внесення коштів пройшло успішно</LabelSemiBold>
        <View style={styles.textContainer}>
          <Body16>Будь-яка допомога може врятувати життя</Body16>
          <Body16>Наближаємо перемогу разом</Body16>
        </View>
      </View>
      <PrimaryButton onPress={() => navigation.navigate("Requests")}>
        До Інших Тварин
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },

  circleContainer: {
    marginBottom: 24,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  textContainer: {
    marginTop: 48,
    alignItems: "center",
  },
});

export default ThankYouScreen;
