import routeNames from "@navigation/routeNames";
import { CombinedStackParamList } from "@navigation/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export type DetailScreenProps = NativeStackScreenProps<
  CombinedStackParamList,
  routeNames.DetailScreen
>;
