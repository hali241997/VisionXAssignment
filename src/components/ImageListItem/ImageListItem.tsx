import routeNames from "@navigation/routeNames";
import { useNavigation } from "@react-navigation/native";
import { DetailScreenProps } from "@screens/DetailScreen";
import React, { FC } from "react";
import { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { ImageListItemProps } from "./types";

const ImageListItem: FC<ImageListItemProps> = ({ likes, name, url }) => {
  const navigation = useNavigation<DetailScreenProps["navigation"]>();

  const handlePress = useCallback(() => {
    navigation.navigate(routeNames.DetailScreen, {
      imageUrl: url,
      name,
      likes,
    });
  }, [likes, name, navigation, url]);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: url }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text>Name: {name}</Text>
        <Text>Likes: {likes}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageListItem;
