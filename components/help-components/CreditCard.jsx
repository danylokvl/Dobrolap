import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { COLORS } from "../../constants/colors";
import Body12 from "../typography/Body12";
import Body14 from "../typography/Body14";
import Headline from "../typography/Headline";

const CreditCard = () => {
  return (
    <View style={styles.creditCardContainer}>
      <LinearGradient
        colors={["#24B386", COLORS.primary]}
        start={{ x: 0.1, y: 0.2 }}
        locations={[0, 1]}
        style={styles.creditCardContainer__card}
      />
      <View style={styles.creditCardContainer__info}>
        <Headline
          color={COLORS.onPrSecTertErr}
          additionalStyles={{ alignSelf: "flex-end" }}
        >
          Visa
        </Headline>
        <View style={styles.creditCardContainer__number}>
          <View style={styles.creditCardContainer__circles}>
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
          </View>
          <View style={styles.creditCardContainer__circles}>
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
          </View>
          <View style={styles.creditCardContainer__circles}>
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
            <View style={styles.creditCardContainer__circle} />
          </View>
          <Body14 semiBold color={COLORS.onPrSecTertErr}>
            3280
          </Body14>
        </View>
        <View style={styles.creditCardContainer__additionalInfo}>
          <View style={styles.creditCardContainer__additionalInfoColumn}>
            <Body12 color={COLORS.onPrSecTertErr}>Дійсна до</Body12>
            <Body12 color={COLORS.onPrSecTertErr} bold>
              06 / 24
            </Body12>
          </View>
          <View style={styles.creditCardContainer__additionalInfoColumn}>
            <Body12 color={COLORS.onPrSecTertErr}>CVC номер</Body12>
            <Body12 color={COLORS.onPrSecTertErr} bold>
              782
            </Body12>
          </View>
          <Body14 color={COLORS.onPrSecTertErr}>Andrii Tkachenko </Body14>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  creditCardContainer: {
    position: "relative",
  },
  creditCardContainer__card: {
    position: "absolute",
    zIndex: 0,
    width: "100%",
    elevation: 10,
    height: 200,
    borderRadius: 24,
  },
  creditCardContainer__info: {
    padding: 24,
    justifyContent: "space-between",
    height: 200,
  },
  creditCardContainer__logo: {
    width: 43.38,
    height: 13,
  },
  creditCardContainer__number: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 12,
  },
  creditCardContainer__circles: {
    flexDirection: "row",
    columnGap: 4,
  },
  creditCardContainer__circle: {
    height: 6,
    width: 6,
    borderRadius: 10,
    backgroundColor: COLORS.onPrSecTertErr,
  },
  creditCardContainer__additionalInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  creditCardContainer__additionalInfoColumn: {
    rowGap: 8,
  },
});

export default CreditCard;
