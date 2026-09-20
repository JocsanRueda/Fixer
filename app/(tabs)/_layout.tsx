import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { THEME } from "@/lib/theme";
import { Tabs } from "expo-router";
import { HouseIcon, SendIcon, StarIcon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import type { ComponentProps } from "react";
import { Platform } from "react-native";

const TAB_BAR_LABEL_STYLE = {
  fontSize: 11,
  fontWeight: "500" as const,
};

type TabBarButtonProps = Omit<ComponentProps<typeof Button>, "ref"> & {
  ref?: unknown;
};

function TabBarButton({ ref: _ref, ...props }: TabBarButtonProps) {
  return <Button {...props} variant="ghost" />;
}

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  const theme = THEME[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.accentForeground,
        tabBarInactiveTintColor: theme.mutedForeground,
        tabBarLabelStyle: TAB_BAR_LABEL_STYLE,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
          marginBottom: Platform.select({ android: 50, default: 1 }),
          height: Platform.select({ android: 50, default: 60 }),
          paddingTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Nueva solicitud",
          tabBarButton: (props) => <TabBarButton {...props} />,
          tabBarIcon: ({ color, size }) => <Icon as={HouseIcon} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="offers"
        options={{
          title: "Ofertas",
          tabBarButton: (props) => <TabBarButton {...props} />,
          tabBarIcon: ({ color, size }) => <Icon as={SendIcon} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="rate"
        options={{
          title: "Valorar",
          tabBarButton: (props) => <TabBarButton {...props} />,
          tabBarIcon: ({ color, size }) => <Icon as={StarIcon} color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
