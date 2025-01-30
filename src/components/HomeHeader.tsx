import { HStack, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";

import { UserPhoto } from "./UserPhoto";
import { Plus } from "phosphor-react-native";

import { Button } from "./Button";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

import Avatar from "@assets/Avatar.png";

export function HomeHeader() {
  const navigator = useNavigation<AppNavigatorRoutesProps>();

  function handleNewAd() {
    navigator.navigate("New");
  }
  const { tokens } = gluestackUIConfig;
  return (
    <HStack mt={64} gap={8} justifyContent="space-around">
      <HStack gap={10} alignItems="center">
        <UserPhoto source={Avatar} alt="user-photo" w={45} h={45} />

        <VStack>
          <Text fontFamily="$body">Boas vindas,</Text>
          <Text color="$gray100" fontFamily="$heading">
            Maria!
          </Text>
        </VStack>
      </HStack>

      <Button
        title="Criar anúncio"
        option="ESCURO"
        textColor="CLARO"
        icon={<Plus color={tokens.colors.gray600} size={16} />}
        width={"40%"}
        h={45}
        onPress={handleNewAd}
      />
    </HStack>
  );
}
