import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed";

import LogoImg from "@assets/Logo.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray600">
      <Center>
        <Image source={LogoImg} alt="Logo" width={95} mt={109} />
        <Heading color="$gray100" fontSize={"$4xl"} mt={10}>
          marketspace
        </Heading>
        <Text color="$gray300" fontFamily={"$mono"} fontSize={"$sm"} mt={5}>
          Seu espaço de compra e venda
        </Text>
      </Center>
      <VStack flex={1} padding={16}>
        <Center mt={60} gap={16}>
          <Text color="$gray200">Acesse sua conta</Text>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" isPassword />
          <Button
            option="AZUL"
            textColor="CLARO"
            title="Entrar"
            $active-bg="$blueDark"
          />
        </Center>
      </VStack>
    </VStack>
  );
}
