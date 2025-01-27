import {
  Input as GluestackInput,
  InputField,
  Pressable,
} from "@gluestack-ui/themed";
import { ComponentProps, useState } from "react";
import { Eye, EyeSlash } from "phosphor-react-native";

type InputProps = ComponentProps<typeof InputField> & {
  isPassword?: boolean;
};

export function Input({ isPassword, ...props }: InputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(false);
  };

  return (
    <GluestackInput
      bg="$gray700"
      h={50}
      px={5}
      borderRadius={6}
      width={"80%"}
      $focus-borderColor="$gray300"
      $focus-borderWidth={1}
    >
      <InputField
        color="$gray200"
        fontFamily="$body"
        placeholderTextColor="$gray400"
        secureTextEntry={isPasswordVisible}
        {...props}
      />
      {isPassword && (
        <Pressable
          onPress={togglePasswordVisibility}
          justifyContent="center"
          mr={10}
        >
          {isPasswordVisible ? (
            <EyeSlash size={20} color="#5F5B62" />
          ) : (
            <Eye size={20} color="#5F5B62" />
          )}
        </Pressable>
      )}
    </GluestackInput>
  );
}
