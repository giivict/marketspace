import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { AdDetails } from "@screens/AdDetails";
import { CreateAd } from "@screens/CreateAd";
import { EditAd } from "@screens/EditAd";
import { Home } from "@screens/Home";
import { MyAd } from "@screens/MyAd";
import { MyAdDetails } from "@screens/MyAdDetails";
import { PreviewAd } from "@screens/PreviewAd";
import { SignIn } from "@screens/SignIn";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { House, Tag, SignOut } from "phosphor-react-native";

type AppRoutes = {
  Home: undefined;
  MyAd: undefined;
  SignOut: undefined;
  Create: undefined;
  Edit: undefined;
  Preview: undefined;
  AdDetails: undefined;
  MyAdDetails: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

const { tokens } = gluestackUIConfig;

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: tokens.colors.gray200,
        tabBarInactiveTintColor: tokens.colors.gray400,
        tabBarStyle: {
          backgroundColor: tokens.colors.gray700,
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 90,
          paddingBottom: tokens.space["6"],
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <House
              color={color}
              size={size}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Screen
        name="MyAd"
        component={MyAd}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Tag
              color={color}
              size={size}
              weight={focused ? "bold" : "regular"}
            />
          ),
        }}
      />
      <Screen
        name="SignOut"
        component={SignIn}
        options={{
          tabBarIcon: () => <SignOut color={tokens.colors.redLight} />,
        }}
      />
      <Screen
        name="Create"
        component={CreateAd}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="Edit"
        component={EditAd}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="Preview"
        component={PreviewAd}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="AdDetails"
        component={AdDetails}
        options={{ tabBarButton: () => null }}
      />
      <Screen
        name="MyAdDetails"
        component={MyAdDetails}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
