import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed";

import LogoImg from "@assets/Logo.png";

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
      <Center mt={90}>
        <Text color="$gray200">Acesse sua conta</Text>
      </Center>
    </VStack>
  );
}
