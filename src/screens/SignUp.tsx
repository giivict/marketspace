import {
  Center,
  VStack,
  Image,
  Heading,
  Text,
  Pressable,
} from "@gluestack-ui/themed";

import LogoImg from "@assets/Logo.png";
import UserPhoto from "@assets/UserPhotoDefault.png";
import { PencilSimpleLine } from "phosphor-react-native";
import { Input } from "@components/Input";

export function SignUp() {
  return (
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
        <Center gap={16}>
          <Image source={UserPhoto} alt="user-photo" w={88} h={88} />
          <Pressable
            p={12}
            h={40}
            w={40}
            position="absolute"
            top={48}
            right={140}
            borderRadius={20}
            bgColor="$blueLight"
            justifyContent="center"
            $active-bg="$blueDark"
          >
            <PencilSimpleLine size={15} color="#EDECEE" weight="light" />
          </Pressable>
          <Input placeholder="Nome" autoCapitalize="words" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input placeholder="Telefone" keyboardType="number-pad" />
          <Input placeholder="Senha" isPassword />
          <Input placeholder="Confirme a Senha" isPassword />
        </Center>
      </VStack>
    </VStack>
  );
}
