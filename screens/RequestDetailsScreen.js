import { ScrollView, StyleSheet, View, Dimensions, Image } from "react-native";

import IconButton from "../components/buttons/IconButton";
import BackButton from "../components/buttons/BackButton";
import TitleLarge from "../components/typography/TitleLarge";
import LabelSemiBold from "../components/typography/TitleLarge";
import Body16 from "../components/typography/Body16";
import Body14 from "../components/typography/Body14";
import { COLORS } from "../constants/colors";
import RightArrowBlock from "../components/RightArrowBlock";
import LargeFAB from "../components/buttons/LargeFAB";
import CardChip from "../components/chips/CardChip";
import ImageCarousel from "../components/ImageCarousel";

const screenDimensions = Dimensions.get("screen");

const RequestDetailsScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.RequestDetails__navigation}>
        <BackButton />
        <View style={styles.RequestDetails__rightNavigation}>
          <IconButton icon='bookmark-outline' />
          <IconButton icon='dots-horizontal' />
        </View>
      </View>
      <ScrollView>
        <ImageCarousel />
        <View style={styles.RequestDetails__content}>
          <View style={styles.RequestDetails__texts}>
            <View style={{ gap: 4 }}>
              <TitleLarge>Волонтери для евакуації</TitleLarge>
              <Body16 grey>Волонтерам, Збір Коштів</Body16>
            </View>
            <Body16>
              На цьому тижні надійшла інформація про те, що скоро наші військові
              привезуть постраждалих собак та котів з Бахмута. Терміново
              потрібні волонтери, бажано зі своїм автомобілем. Також буду
              вдячний за будь яку фінансову допомогу, збираємо кошти на корм,
              ліки та стерилізацію
            </Body16>
          </View>
          <View style={styles.RequestDetails__block}>
            <LabelSemiBold>Вже допомогли</LabelSemiBold>
            <RightArrowBlock />
          </View>
          <View style={{ marginTop: 40 }}>
            <LabelSemiBold>Локація</LabelSemiBold>
            <Image
              source={require("../assets/images/dummyImages/map.png")}
              style={styles.RequestDetails__locationImage}
            />
            <View style={styles.RequestDetails__locationChip}>
              <CardChip icon='map-marker-outline'>Київ</CardChip>
            </View>
          </View>
          <View style={styles.RequestDetails__block}>
            <LabelSemiBold>Автор Запиту</LabelSemiBold>
            <RightArrowBlock showAuthor />
          </View>
          <View style={styles.RequestDetails__block}>
            <LabelSemiBold>Збір коштів</LabelSemiBold>
            <View style={styles.RequestDetails__donateInfo}>
              <View style={{ flexDirection: "row" }}>
                <Body14 semiBold primaryColor>
                  2 000 грн.{" "}
                </Body14>
                <Body14>зібрано з 10 000 грн.</Body14>
              </View>
              <View
                style={{
                  backgroundColor: COLORS.backgroundVariant,
                  height: 8,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    width: 128,
                    height: "100%",
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Body14 semiBold primaryColor>
                  10 людей
                </Body14>
                <Body14>вже внесли кошти</Body14>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <LargeFAB
        icon='hand-heart-outline'
        onPress={() => navigation.navigate("Help Variants")}
      >
        Допомогти
      </LargeFAB>
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
  RequestDetails__content: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  RequestDetails__image: {
    height: 300,
    maxWidth: screenDimensions.width,
  },
  RequestDetails__texts: {
    marginTop: 16,
    gap: 16,
  },

  RequestDetails__block: {
    marginTop: 40,
    gap: 16,
  },

  RequestDetails__locationImage: {
    marginTop: 16,
    height: 200,
    width: screenDimensions.width - 32,
    borderRadius: 12,
  },
  RequestDetails__locationChip: {
    position: "absolute",
    bottom: 8,
    left: 8,
  },
  RequestDetails__donateInfo: {
    gap: 8,
  },
});

export default RequestDetailsScreen;
