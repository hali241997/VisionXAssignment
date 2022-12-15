import AppNavigation from "@navigation/index";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import React, { FC } from "react";

const AppWrapper: FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{ ...theme, colors: { ...theme.colors, background: "#F3F3F3" } }}>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default AppWrapper;
