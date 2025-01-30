import { View, Text } from "@gluestack-ui/themed";

type Props = {
  isSelected: "USADO" | "NOVO";
};

export function Status({ isSelected }: Props) {
  return isSelected === "USADO" ? (
    <View
      bgColor="$gray200"
      borderRadius={100}
      paddingHorizontal={8}
      paddingVertical={4}
      w={"30%"}
      alignItems="center"
      position="absolute"
      right={5}
      top={5}
    >
      <Text fontFamily="$heading" fontSize={10} color="#FFFFFF">
        USADO
      </Text>
    </View>
  ) : (
    <View
      bgColor="$blueDark"
      borderRadius={100}
      paddingHorizontal={8}
      paddingVertical={4}
      w={"26%"}
      alignItems="center"
      position="absolute"
      right={5}
      top={5}
    >
      <Text fontFamily="$heading" fontSize={10} color="#FFFFFF">
        NOVO
      </Text>
    </View>
  );
}
