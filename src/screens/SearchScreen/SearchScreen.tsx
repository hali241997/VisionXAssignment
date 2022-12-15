import { ImageList } from "@components/ImageList";
import { SearcInput } from "@components/SearchInput";
import { useAxiosUnsplashImages } from "@hooks/useAxiosUnsplashImages";
import React, { FC, useState } from "react";
import { SafeAreaView } from "react-native";
import { SearchScreenProps } from "./types";

const SearchScreen: FC<SearchScreenProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);

  const { response } = useAxiosUnsplashImages({
    searchQuery,
    pageNum,
  });

  const updatePageNum = () => {
    setPageNum(prevState => prevState + 1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearcInput value={searchQuery} setValue={setSearchQuery} />
      <ImageList images={response} updatePageNum={updatePageNum} />
    </SafeAreaView>
  );
};

export default SearchScreen;
