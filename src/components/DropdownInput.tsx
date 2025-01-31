import { useState } from "react";
import { Box } from "@gluestack-ui/themed";
import { Dropdown } from "react-native-element-dropdown";
import { CaretDown, CaretUp } from "phosphor-react-native";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";

const data = [
  { label: "Todos", value: "todos" },
  { label: "Ativos", value: "ativos" },
  { label: "Inativos", value: "inativos" },
];

export function DropdownInput() {
  const [value, setValue] = useState("todos");
  const [isFocus, setIsFocus] = useState(false);
  const { tokens } = gluestackUIConfig;
  return (
    <Box px={4} py={2}>
      <Dropdown
        style={{
          height: 40,
          width: 120,
          borderWidth: 1,
          borderColor: isFocus ? tokens.colors.gray100 : tokens.colors.gray500,
          borderRadius: 8,
          paddingHorizontal: 12,
          backgroundColor: tokens.colors.gray700,
          flexDirection: "row",
          alignItems: "center",
        }}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Todos" : "..."}
        placeholderStyle={{
          fontSize: tokens.fontSizes.sm,
          color: tokens.colors.gray100,
        }}
        selectedTextStyle={{
          fontSize: tokens.fontSizes.sm,
          color: tokens.colors.gray100,
          fontFamily: tokens.fonts.body,
          padding: 3,
        }}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderRightIcon={() =>
          isFocus ? (
            <CaretUp size={20} color={tokens.colors.gray400} />
          ) : (
            <CaretDown size={20} color={tokens.colors.gray400} />
          )
        }
        itemContainerStyle={{
          borderRadius: 8,
          marginVertical: -10,
        }}
        containerStyle={{
          paddingHorizontal: 0,
          paddingVertical: 0,
          margin: 0,
          height: 102,
          borderRadius: 8,
          borderWidth: 0,
          backgroundColor: tokens.colors.gray700,
        }}
        activeColor={tokens.colors.gray700}
        itemTextStyle={{
          fontSize: tokens.fontSizes.sm,
          color: tokens.colors.gray100,
          fontFamily: tokens.fonts.body,
        }}
      />
    </Box>
  );
}
