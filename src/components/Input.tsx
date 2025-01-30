import { ComponentProps, ReactNode, useState } from "react";
import {
  Input as GluestackInput,
  InputField,
  Pressable,
  View,
} from "@gluestack-ui/themed";

import { Eye, EyeSlash } from "phosphor-react-native";

type InputProps = ComponentProps<typeof InputField> & {
  isPassword?: boolean;
  icon1?: ReactNode;
  icon2?: ReactNode;
};

export function Input({ isPassword, icon1, icon2, ...props }: InputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(!!isPassword);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <GluestackInput
      bg="$gray700"
      h={50}
      px={5}
      borderRadius={6}
      borderWidth={0}
      $focus-borderColor="$gray300"
      $focus-borderWidth={1}
      flexDirection="row"
      alignItems="center"
    >
      <InputField
        color="$gray200"
        fontFamily="$body"
        placeholderTextColor="$gray400"
        secureTextEntry={isPasswordVisible}
        flex={1}
        {...props}
      />
      {isPassword && (
        <Pressable
          onPress={togglePasswordVisibility}
          justifyContent="center"
          mr={-10}
        >
          {isPasswordVisible ? (
            <EyeSlash size={20} color="#5F5B62" />
          ) : (
            <Eye size={20} color="#5F5B62" />
          )}
        </Pressable>
      )}
      <Pressable pr={6} $active-mb={10}>
        {icon1}
      </Pressable>
      {icon1 && icon2 && <View height={"50%"} width={1} bg="$gray400" mx={4} />}
      <Pressable pl={6} pr={10} $active-mb={10}>
        {icon2}
      </Pressable>
    </GluestackInput>
  );
}
