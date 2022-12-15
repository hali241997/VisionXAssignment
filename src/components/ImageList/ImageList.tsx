import { ImageListItem } from "@components/ImageListItem";
import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { ImageListProps } from "./types";

const ImageList: FC<ImageListProps> = ({ images, updatePageNum }) => {
  return (
    <FlatList
      data={images}
      keyExtractor={item => item.id}
      contentContainerStyle={{ padding: 10, flexGrow: 1 }}
      onEndReachedThreshold={0.2}
      onEndReached={updatePageNum}
      ItemSeparatorComponent={() => {
        return <View style={{ marginBottom: 20 }} />;
      }}
      renderItem={({ item }) => (
        <ImageListItem name={item.name} url={item.url} likes={item.likes} />
      )}
    />
  );
};

export default ImageList;
