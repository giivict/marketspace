import { PressableProps } from "react-native";
import {
  HStack,
  Image,
  Pressable,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";

import { Status } from "./Status";
import { UserPhoto } from "./UserPhoto";

import Product from "@assets/Product.png";
import UserPhotoPNG from "@assets/UserPhotoDefault.png";
import { ReactNode } from "react";

type Props = PressableProps & {
  isSelcted: "ATIVADO" | "DESATIVADO";
  title: string;
  price: string;
  photo?: ReactNode;
};

export function AdCard({ title, price, photo, isSelcted, ...rest }: Props) {
  return isSelcted === "ATIVADO" ? (
    <Pressable {...rest}>
      <VStack>
        <Image
          source={Product}
          alt="product"
          borderRadius={6}
          w={170}
          h={130}
        />
        {photo && (
          <UserPhoto
            source={UserPhotoPNG}
            alt="user-photo"
            h={25}
            w={25}
            position="absolute"
            top={5}
            left={5}
          />
        )}

        <Status isSelected="NOVO" />
        <Text fontFamily="$body" color="$gray200" fontSize={"$sm"} mt={5}>
          {title}
        </Text>
        <HStack gap={4} alignItems="center">
          <Text fontFamily="$heading" color="$gray100" fontSize={"$xs"}>
            R$
          </Text>
          <Text fontFamily="$heading" color="$gray100" fontSize={"$md"}>
            {price}
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  ) : (
    <Pressable {...rest}>
      <VStack>
        <Image
          source={Product}
          alt="product"
          borderRadius={6}
          w={170}
          h={130}
        />
        {photo && (
          <UserPhoto
            source={UserPhotoPNG}
            alt="user-photo"
            h={25}
            w={25}
            position="absolute"
            top={5}
            left={5}
          />
        )}
        <Status isSelected="NOVO" />

        <View
          w={170}
          h={130}
          borderRadius={6}
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.4)" // Escurece a imagem
          justifyContent="flex-end"
        >
          <Text
            mb={5}
            ml={10}
            color="$white"
            fontFamily="$heading"
            fontSize={11}
          >
            ANÚNCIO DESATIVADO
          </Text>
        </View>

        <Text fontFamily="$body" color="$gray400" fontSize={"$sm"} mt={5}>
          {title}
        </Text>
        <HStack gap={4} alignItems="center">
          <Text fontFamily="$body" color="$gray400" fontSize={"$xs"}>
            R$
          </Text>
          <Text fontFamily="$body" color="$gray400" fontSize={"$md"}>
            {price}
          </Text>
        </HStack>
      </VStack>
    </Pressable>
  );
}
