import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
  option?: "AZUL" | "ESCURO" | "CLARO";
  textColor?: "CLARO" | "ESCURO";
};
export function Button({
  title,
  isLoading = false,
  option = "AZUL",
  textColor = "CLARO",
  ...rest
}: Props) {
  const backgroundColor =
    option === "AZUL"
      ? "$blueLight"
      : option === "ESCURO"
      ? "$gray100"
      : "$gray500";

  const color = textColor === "CLARO" ? "$gray700" : "$gray300";
  return (
    <GluestackButton
      w={"80%"}
      h={50}
      borderRadius={6}
      bg={backgroundColor}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$gray700" />
      ) : (
        <Text fontFamily="$heading" fontSize="$sm" color={color}>
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
