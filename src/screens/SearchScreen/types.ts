import routeNames from "@navigation/routeNames";
import { CombinedStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type SearchScreenProps = NativeStackScreenProps<
  CombinedStackParamList,
  routeNames.SearchScreen
>;
