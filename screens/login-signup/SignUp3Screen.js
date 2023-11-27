import { View, StyleSheet } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import Headline from "../../components/typography/Headline";
import { COLORS } from "../../constants/colors";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import LabelLarge from "../../components/typography/LabelLarge";
import LabelSemiBold from "../../components/typography/LabelSemiBold";
import SignUp3Image from "../../components/auth-forms/SignUp3Image";

const SignUp3Screen = ({ navigation }) => {
  const [pickedImage, setPickedImage] = useState(null);

  async function LoadImage() {
    const status = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!status.granted) return;
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) setPickedImage(result.assets[0].uri);
  }

  let primaryButton;
  if (pickedImage === null) {
    primaryButton = (
      <PrimaryButton onPress={() => LoadImage()} icon='image-plus'>
        Додати Фото
      </PrimaryButton>
    );
  } else {
    primaryButton = (
      <PrimaryButton onPress={() => navigation.navigate("Sign Up 4")}>
        Продовжити
      </PrimaryButton>
    );
  }

  return (
    <View style={styles.screen}>
      <Headline color={COLORS.primary}>Реєстрація</Headline>
      <View style={styles.imageContainer}>
        <LabelLarge>Завантажте ваше фото</LabelLarge>
        <SignUp3Image pickedImageUri={pickedImage} />
        <LabelSemiBold>Андрій Ткаченко</LabelSemiBold>
      </View>
      {primaryButton}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 52,
    paddingBottom: 40,
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },

  imageContainer: {
    rowGap: 32,
    alignItems: "center",
  },
});

export default SignUp3Screen;
