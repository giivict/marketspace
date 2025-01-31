import { Text, View, VStack, HStack, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AdCard } from "@components/AdCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { DropdownInput } from "@components/DropdownInput";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { Plus } from "phosphor-react-native";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

export function MyAd() {
  const { tokens } = gluestackUIConfig;
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleMyAdDetails() {
    navigator.navigate("MyAdDetails");
  }
  return (
    <VStack flex={1} bgColor="$gray600">
      <ScreenHeader
        icon2={<Plus size={24} color={tokens.colors.gray100} />}
        title="Meus anúncios"
      />

      <HStack
        mt={40}
        ml={25}
        mr={25}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text>9 anúncios</Text>
        <DropdownInput />
      </HStack>
      <ScrollView ml={25} mr={25} pb={50} showsVerticalScrollIndicator={false}>
        <View
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
          mt={30}
          width="100%"
          gap={24}
          mb={20}
        >
          <AdCard
            isSelcted="DESATIVADO"
            title="Tênis vermelho"
            price="59,90"
            onPress={handleMyAdDetails}
          />
          <AdCard
            isSelcted="ATIVADO"
            title="Tênis vermelho"
            price="59,90"
            onPress={handleMyAdDetails}
          />
          <AdCard
            isSelcted="ATIVADO"
            title="Tênis vermelho"
            price="59,90"
            onPress={handleMyAdDetails}
          />
          <AdCard
            isSelcted="DESATIVADO"
            title="Tênis vermelho"
            price="59,90"
            onPress={handleMyAdDetails}
          />
          <AdCard
            isSelcted="DESATIVADO"
            title="Tênis vermelho"
            price="59,90"
            onPress={handleMyAdDetails}
          />
          <AdCard
            isSelcted="DESATIVADO"
            title="Tênis vermelho"
            price="59,90"
            onPress={handleMyAdDetails}
          />
        </View>
      </ScrollView>
    </VStack>
  );
}
