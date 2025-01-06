import { useLocalSearchParams } from "expo-router";
import * as React from "react";
import { Text, View } from "react-native";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
};

export default Property;
