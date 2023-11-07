import { ScrollView, StyleSheet, View, Dimensions } from "react-native";

import TitleLarge from "../../components/typography/TitleLarge";
import LabelSemiBold from "../../components/typography/TitleLarge";
import Body16 from "../../components/typography/Body16";
import Body14 from "../../components/typography/Body14";
import { COLORS } from "../../constants/colors";
import RightArrowBlock from "../../components/help-components/RightArrowBlock";
import LargeFAB from "../../components/buttons/LargeFAB";
import CardChip from "../../components/chips/CardChip";
import ImageCarousel from "../../components/help-components/ImageCarousel";

const screenDimensions = Dimensions.get("screen");

const RequestDetailsScreen = ({ navigation }) => {
  return (
    <>
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
            <RightArrowBlock
              onPress={() => navigation.navigate("Already Helped")}
            />
          </View>
          <View style={styles.RequestDetails__block}>
            <LabelSemiBold>Адреса</LabelSemiBold>
            <View style={styles.RequestDetails__locationList}>
              <View style={styles.RequestDetails__locationListItem}>
                <Body14 color={COLORS.onBackgroundVariant}> Місто </Body14>
                <Body14 semiBold color={COLORS.onBackground}>
                  Київ
                </Body14>
              </View>
              <View style={styles.RequestDetails__locationListItem}>
                <Body14 color={COLORS.onBackgroundVariant}> Вулиця </Body14>
                <Body14 semiBold color={COLORS.onBackground}>
                  Олександрівська
                </Body14>
              </View>
              <View style={styles.RequestDetails__locationListItem}>
                <Body14 color={COLORS.onBackgroundVariant}> Будинок </Body14>
                <Body14 semiBold color={COLORS.onBackground}>
                  9А
                </Body14>
              </View>
            </View>
          </View>
          <View style={styles.RequestDetails__block}>
            <LabelSemiBold>Автор Запиту</LabelSemiBold>
            <RightArrowBlock
              showPerson
              onPress={() => navigation.navigate("Another Profile")}
            />
          </View>
          <View style={styles.RequestDetails__block}>
            <LabelSemiBold>Збір коштів</LabelSemiBold>
            <View style={styles.RequestDetails__donateInfo}>
              <View style={{ flexDirection: "row" }}>
                <Body14 semiBold color={COLORS.primary}>
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
                <Body14 semiBold color={COLORS.primary}>
                  10 людей{" "}
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

  RequestDetails__locationList: {
    gap: 16,
  },

  RequestDetails__locationListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  RequestDetails__donateInfo: {
    gap: 8,
  },
});

export default RequestDetailsScreen;
