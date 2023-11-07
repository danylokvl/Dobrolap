import { useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

import { COLORS } from "../../constants/colors";

const screenDimensions = Dimensions.get("screen");

const IMAGES = [
  { image: require("../../assets/images/dummyImages/dog-near-tank.png") },
  { image: require("../../assets/images/dummyImages/homeless-cat.jpg") },
  { image: require("../../assets/images/dummyImages/dog-with-soldier.jpg") },
  { image: require("../../assets/images/dummyImages/dog-near-puddle.jpg") },
  { image: require("../../assets/images/dummyImages/cat-with-soldier.jpg") },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function renderCarouselIndicators() {
    return (
      <View style={styles.indicatorContainer}>
        {IMAGES.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.carouselIndicator,
                index === activeIndex ? styles.activeIndicator : null,
              ]}
            />
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={(event) => {
          const slideSize = screenDimensions.width;
          const index = event.nativeEvent.contentOffset.x / slideSize;
          const roundIndex = Math.round(index);
          setActiveIndex(roundIndex);
        }}
        data={IMAGES}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.imageStyle} />
        )}
        keyExtractor={(index) => index + Math.random()}
      />
      {renderCarouselIndicators()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  imageStyle: {
    height: 350,
    width: screenDimensions.width,
  },

  indicatorContainer: {
    position: "absolute",
    bottom: 16,
    flexDirection: "row",
    gap: 8,
  },

  carouselIndicator: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.onPrSecTertErr,
  },

  activeIndicator: {
    backgroundColor: COLORS.onPrSecTertErr,
  },
});

export default ImageCarousel;
