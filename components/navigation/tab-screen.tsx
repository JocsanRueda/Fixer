import { Text } from "@/components/ui/text";
import { View } from "react-native";

type TabScreenProps = {
  description: string;
  title: string;
};

export function TabScreen({ description, title }: TabScreenProps) {
  return (
    <View className="flex-1 justify-center gap-2 bg-background p-6">
      <Text variant="h1" className="text-left">
        {title}
      </Text>
      <Text className="text-muted-foreground">{description}</Text>
    </View>
  );
}
