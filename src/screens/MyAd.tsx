import { Text, Center, VStack, HStack } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";

import { Plus } from "phosphor-react-native";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { DropdownInput } from "@components/DropdownInput";

export function MyAd() {
  const { tokens } = gluestackUIConfig;
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
    </VStack>
  );
}
