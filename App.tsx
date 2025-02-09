import { StatusBar } from "react-native";
import { GluestackUIProvider } from "@gluestack-ui/themed";

import { Routes } from "@routes/index";
import { Loading } from "@components/Loading";

import { config } from "./config/gluestack-ui.config";
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
  Karla_300Light,
} from "@expo-google-fonts/karla";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
    Karla_300Light,
  });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  );
}
