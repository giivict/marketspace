import { CardAdInfo } from "@components/CardAdInfo";
import { HomeHeader } from "@components/HomeHeader";
import { Input } from "@components/Input";
import { Text, VStack } from "@gluestack-ui/themed";
import { MagnifyingGlass, Sliders } from "phosphor-react-native";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

export function Home() {
  const { tokens } = gluestackUIConfig;
  return (
    <VStack flex={1} bgColor="$gray600">
      <HomeHeader />

      <VStack mt={40} ml={25} mr={25}>
        <Text color="$gray300" fontSize="$sm" fontFamily="$body">
          Seus produtos anunciados para venda
        </Text>
        <CardAdInfo number={4} />

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
    </VStack>
  );
}
