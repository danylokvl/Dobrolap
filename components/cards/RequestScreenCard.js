import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import TitleLarge from "../typography/TitleLarge";
import LabelSemiBold from "../typography/LabelSemiBold";
import Body16 from "../typography/Body16";
import Body14 from "../typography/Body14";
import Body12 from "../typography/Body12";
import CardChip from "../chips/CardChip";
import { COLORS } from "../../constants/colors";

const windowDimensions = Dimensions.get("window");

const RequestScreenCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardAuthor}>
          <View style={styles.cardAuthorNameAndImage}>
            <Image
              style={styles.cardAuthorImage}
              source={require("../../assets/images/dummyImages/dmytro-ostapenko.jpg")}
            />
            <View style={styles.cardAuthorText}>
              <LabelSemiBold>Дмитро Остапенко</LabelSemiBold>
              <Body12>Волонтер</Body12>
            </View>
          </View>
          <Ionicons
            name='bookmark-outline'
            size={24}
            color={COLORS.onBackground}
          />
        </View>
        <View style={styles.cardImage}>
          <Image
            style={styles.cardImage__image}
            source={require("../../assets/images/dummyImages/dog-near-tank.png")}
          />

          <View
            style={[styles.cardImage__chip, styles.cardImage__locationChip]}
          >
            <CardChip icon='location-outline'>Київ</CardChip>
          </View>
          <View style={[styles.cardImage__chip, styles.cardImage__timeChip]}>
            <CardChip icon='time-outline'>2 дні тому</CardChip>
          </View>

          <View
            style={[
              styles.cardImage__chip,
              styles.cardImage__alreadyHelpedChip,
            ]}
          >
            <CardChip icon='people-outline'>12 людей вже допомогли</CardChip>
          </View>
        </View>
        <View style={styles.cardTexts}>
          <View style={styles.cardTexts__titleAndSubtitle}>
            <TitleLarge>Волонтери для евакуації</TitleLarge>
            <Body16>Волонтерам, Збір коштів</Body16>
          </View>

          <View style={styles.cardTexts__divider} />
          <Body14>
            На цьому тижні надійшла інформація про те, що скоро наші військові
            привезуть постраждалих собак та котів з Бахмута...
          </Body14>
        </View>
      </View>
      <View style={styles.cardButtons}>
        <Pressable
          style={[
            styles.cardButtons__button,
            styles.cardButtons__detailsButton,
          ]}
        >
          <Text style={[styles.cardButtons__text, { color: COLORS.primary }]}>
            Дeтальніше
          </Text>
        </Pressable>
        <Pressable
          style={[styles.cardButtons__button, styles.cardButtons__helpButton]}
        >
          {/*       <Ionicons name='heart' size={20} color={COLORS.onPrSecTertErr} />*/}
          <Text
            style={[styles.cardButtons__text, { color: COLORS.onPrSecTertErr }]}
          >
            Допомогти
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 24,
    backgroundColor: COLORS.background,
    borderRadius: 12,
    elevation: 4,
    shadowColor: COLORS.cardShadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  cardContent: {
    paddingHorizontal: 8,
    paddingTop: 8,
    marginBottom: 36,
  },
  cardAuthor: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardAuthorNameAndImage: {
    flexDirection: "row",
    gap: 12,
  },
  cardAuthorImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  cardAuthorText: {
    gap: 4,
  },

  cardImage: {
    position: "relative",
    alignItems: "center",
    marginBottom: 16,
  },

  cardImage__image: {
    maxWidth: windowDimensions.width - 36,
    height: 200,
    borderRadius: 8,
  },

  cardImage__chip: {
    position: "absolute",
  },

  cardImage__locationChip: {
    left: 8,
    top: 8,
  },

  cardImage__timeChip: {
    right: 8,
    top: 8,
  },

  cardImage__alreadyHelpedChip: {
    bottom: 8,
    width: "95%",
  },

  cardTexts: {
    gap: 16,
  },
  cardTexts__titleAndSubtitle: {
    gap: 4,
  },
  cardTexts__divider: {
    height: 1,
    backgroundColor: COLORS.outline,
  },

  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardButtons__text: {
    fontFamily: "FixelDisplay-Medium",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  cardButtons__button: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
  },
  cardButtons__detailsButton: {
    alignItems: "center",
  },
  cardButtons__helpButton: {
    borderTopLeftRadius: 11,
    borderBottomRightRadius: 11,
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
});

export default RequestScreenCard;
