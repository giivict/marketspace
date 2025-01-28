import {
  Center,
  VStack,
  Image,
  Heading,
  Text,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRoutsProps } from "@routes/auth.routes";

import LogoImg from "@assets/Logo.png";
import UserPhoto from "@assets/UserPhotoDefault.png";

import { PencilSimpleLine } from "phosphor-react-native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Platform } from "react-native";

export function SignUp() {
  const navigator = useNavigation<AuthNavigatorRoutsProps>();

  function handleGoBack() {
    navigator.goBack();
  }

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <VStack flex={1} backgroundColor="$gray600">
          <Center gap={12} paddingHorizontal={40}>
            <Image source={LogoImg} alt="Logo" width={60} h={40} mt={70} />
            <Heading>Boas vindas!</Heading>
            <Text textAlign="center">
              Crie sua conta e use o espaço para comprar itens variados e vender
              seus produtos
            </Text>
          </Center>

          <VStack marginTop={40} paddingHorizontal={16}>
            <Center>
              <Center>
                <Image source={UserPhoto} alt="user-photo" w={88} h={88} />
                <Pressable
                  p={12}
                  h={40}
                  w={40}
                  position="absolute"
                  bottom={0}
                  right={0}
                  borderRadius={20}
                  bgColor="$blueLight"
                  justifyContent="center"
                  $active-bg="$blueDark"
                  alignItems="center"
                >
                  <PencilSimpleLine size={15} color="#EDECEE" weight="light" />
                </Pressable>
              </Center>
            </Center>

            <Center gap={16} mt={15}>
              <Input placeholder="Nome" autoCapitalize="words" />
              <Input placeholder="E-mail" keyboardType="email-address" />
              <Input placeholder="Telefone" keyboardType="number-pad" />
              <Input placeholder="Senha" isPassword />
              <Input placeholder="Confirme a Senha" isPassword />

              <Button
                title="Criar"
                option="ESCURO"
                mt={15}
                $active-bgColor="$gray200"
              />
            </Center>
          </VStack>
          <Center mt={60} paddingHorizontal={16}>
            <Text color="$gray200" fontFamily="$body">
              Já tem uma conta?
            </Text>
            <Button
              title="Ir para o login"
              option="CLARO"
              textColor="ESCURO"
              mt={15}
              mb={100}
              $active-bgColor="$gray200"
              onPress={handleGoBack}
            />
          </Center>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
