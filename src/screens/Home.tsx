import { ScrollView, Text, View, VStack } from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { AdCard } from "@components/AdCard";
import { InfoCard } from "@components/InfoCard";
import { HomeHeader } from "@components/HomeHeader";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";

export function Home() {
  const { tokens } = gluestackUIConfig;
  return (
    <VStack flex={1} bgColor="$gray600">
      <HomeHeader />

      <VStack mt={40} ml={25} mr={25}>
        <Text color="$gray300" fontSize="$sm" fontFamily="$body">
          Seus produtos anunciados para venda
        </Text>
        <InfoCard number={4} />

        <Text
          mt={40}
          mb={15}
          color="$gray300"
          fontSize="$sm"
          fontFamily="$body"
        >
          Compre produtos variados
        </Text>
        <Input
          placeholder="Buscar anúncio"
          icon1={
            <MagnifyingGlass
              size={20}
              weight="bold"
              color={tokens.colors.gray200}
            />
          }
          icon2={
            <Sliders size={20} weight="bold" color={tokens.colors.gray200} />
          }
        />
      </VStack>
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
          <AdCard isSelcted="DESATIVADO" title="Tênis vermelho" price="59,90" />
          <AdCard isSelcted="ATIVADO" title="Tênis vermelho" price="59,90" />
          <AdCard isSelcted="ATIVADO" title="Tênis vermelho" price="59,90" />
          <AdCard isSelcted="DESATIVADO" title="Tênis vermelho" price="59,90" />
          <AdCard isSelcted="DESATIVADO" title="Tênis vermelho" price="59,90" />
          <AdCard isSelcted="DESATIVADO" title="Tênis vermelho" price="59,90" />
        </View>
      </ScrollView>
    </VStack>
  );
}
