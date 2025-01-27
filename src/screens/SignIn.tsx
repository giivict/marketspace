import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed";

import LogoImg from "@assets/Logo.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Center bg="$gray600">
        <Image source={LogoImg} alt="Logo" width={95} mt={109} />
        <Heading color="$gray100" fontSize={"$4xl"} mt={10}>
          marketspace
        </Heading>
        <Text color="$gray300" fontFamily={"$mono"} fontSize={"$sm"} mt={5}>
          Seu espaço de compra e venda
        </Text>
      </Center>
      <VStack
        bg="$gray600"
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        pb={90}
      >
        <Center mt={60} gap={16}>
          <Text color="$gray200" fontFamily="$body">
            Acesse sua conta
          </Text>

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
            mt={15}
          />
        </Center>
      </VStack>
      <Center flex={1} gap={16} pb={50}>
        <Text color="$gray200" fontFamily="$body">
          Ainda não tem acesso?
        </Text>
        <Button
          option="CLARO"
          textColor="ESCURO"
          title="Criar uma conta"
          $active-bg="$gray400"
        />
      </Center>
    </VStack>
  );
}
