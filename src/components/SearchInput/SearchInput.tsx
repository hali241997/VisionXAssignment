import React, { FC } from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import { SearchInputProps } from "./types";

const SearchInput: FC<SearchInputProps> = ({ value, setValue }) => {
  return (
    <TextInput
      placeholder="Search here"
      style={styles.input}
      value={value}
      onChangeText={setValue}
    />
  );
};

export default SearchInput;
