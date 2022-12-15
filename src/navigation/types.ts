import routeNames from "./routeNames";

export type CombinedStackParamList = RootStackParamList;

export type RootStackParamList = {
  [routeNames.SearchScreen]: undefined;
  [routeNames.DetailScreen]: {
    imageUrl: string;
    name: string;
    likes: number;
  };
};
