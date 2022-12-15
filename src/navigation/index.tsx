import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailScreen } from "@screens/DetailScreen";
import { SearchScreen } from "@screens/SearchScreen";
import React, { FC } from "react";
import routeNames from "./routeNames";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation: FC = () => {
  return (
    <Stack.Navigator initialRouteName={routeNames.SearchScreen}>
      <Stack.Screen name={routeNames.SearchScreen} component={SearchScreen} />
      <Stack.Screen name={routeNames.DetailScreen} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
