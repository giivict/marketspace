import { CardAdInfo } from "@components/CardAdInfo";
import { HomeHeader } from "@components/HomeHeader";
import { Center, Text, VStack } from "@gluestack-ui/themed";

export function Home() {
  return (
    <VStack flex={1} bgColor="$gray600">
      <HomeHeader />

      <VStack mt={40} ml={25}>
        <Text color="$gray300" fontSize="$sm" fontFamily="$body">
          Seus produtos anunciados para venda
        </Text>
        <CardAdInfo number={4} />
      </VStack>
    </VStack>
  );
}
