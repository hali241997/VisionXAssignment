import { Dispatch, SetStateAction } from "react";

export interface SearchInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
