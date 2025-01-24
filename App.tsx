import { StatusBar, Text, View } from "react-native";

import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from "@expo-google-fonts/karla";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={"transparent"}
          translucent
        />
        {fontsLoaded ? (
          <Text style={{ fontFamily: "Karla_700Bold" }}>Home</Text>
        ) : (
          <View />
        )}
      </View>
    </GluestackUIProvider>
  );
}
