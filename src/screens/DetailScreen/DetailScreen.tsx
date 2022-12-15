import React, { FC } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import { DetailScreenProps } from "./types";

const DetailScreen: FC<DetailScreenProps> = ({
  route: {
    params: { name, likes, imageUrl },
  },
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.content}>Name: {name}</Text>
        <Text style={styles.content}>Likes: {likes}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
