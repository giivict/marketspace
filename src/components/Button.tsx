import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
  option?: "AZUL" | "ESCURO" | "CLARO";
  textColor?: "CLARO" | "ESCURO";
  icon?: ReactNode; // Mantemos o tipo ReactNode
};

export function Button({
  title,
  isLoading = false,
  icon,
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

  const color = textColor === "CLARO" ? "$gray700" : "$gray200";

  return (
    <GluestackButton
      w={"80%"}
      h={50}
      borderRadius={6}
      bg={backgroundColor}
      disabled={isLoading}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap={8}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color="$gray700" />
      ) : (
        <>
          {icon && icon}
          <Text fontFamily="$heading" fontSize="$sm" color={color}>
            {title}
          </Text>
        </>
      )}
    </GluestackButton>
  );
}
