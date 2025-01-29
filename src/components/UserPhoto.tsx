import { Image } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Image>;

export function UserPhoto({ ...rest }: Props) {
  return (
    <Image
      rounded="$full"
      borderWidth={2}
      borderColor="$blueLight"
      backgroundColor="$gray600"
      {...rest}
    />
  );
}
