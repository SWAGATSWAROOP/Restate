import images from "@/constants/images";
import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const NoResults = () => {
  return (
    <View className="flex items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="text-2xl font-rubik-bold text-black-300 mt-5">
        NoResults
      </Text>
      <Text className="text-base text-black-100 mt-2">
        We could not find any results
      </Text>
    </View>
  );
};

export default NoResults;
