import { HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { ArrowRight, Tag } from "phosphor-react-native";

type Props = {
  number: number;
};

export function InfoCard({ number }: Props) {
  const { tokens } = gluestackUIConfig;
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleMyAds() {
    navigator.navigate("MyAd");
  }
  return (
    <HStack
      bgColor="#647AC71A"
      py={12}
      pr={20}
      pl={16}
      h={75}
      borderRadius={6}
      gap={12}
      alignItems="center"
      justifyContent="space-between"
      mt={15}
    >
      <HStack gap={16} alignItems="center">
        <Tag size={22} color={tokens.colors.blueDark} />
        <VStack>
          <Text fontFamily="$heading" color="$gray200" fontSize={"$xl"}>
            {number}
          </Text>
          <Text fontFamily="$body" color="$gray300" fontSize={"$xs"}>
            anúncios ativos
          </Text>
        </VStack>
      </HStack>

      <Pressable $active-marginBottom={10} onPress={handleMyAds}>
        <HStack gap={8} alignItems="center">
          <Text fontFamily="$heading" fontSize={"$xs"} color="$blueDark">
            Meus anúncios
          </Text>
          <ArrowRight size={22} color={tokens.colors.blueDark} />
        </HStack>
      </Pressable>
    </HStack>
  );
}
