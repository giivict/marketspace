import { Pressable, Text, View } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { ReactNode } from "react";
import { PressableProps } from "react-native";

type Props = PressableProps & {
  title?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
};

export function ScreenHeader({ title, icon1, icon2, ...rest }: Props) {
  return (
    <HStack
      mt={64}
      gap={8}
      bgColor="$gray600"
      alignItems="center"
      justifyContent="center"
    >
      {icon1 && (
        <Pressable position="absolute" left={32} {...rest}>
          {icon1}
        </Pressable>
      )}
      <Text fontFamily="$heading" fontSize={"$xl"} color="$gray100">
        {title}
      </Text>
      {icon2 && (
        <Pressable position="absolute" right={32} {...rest}>
          {icon2}
        </Pressable>
      )}
    </HStack>
  );
}
