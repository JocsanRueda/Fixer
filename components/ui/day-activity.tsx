import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Check, Dot } from "lucide-react-native";

export type DayActivityProps = React.ComponentProps<typeof View> &
  React.RefAttributes<typeof View> & {
    name: string;
    day: string;
    hour: string;
    status?: "pending" | "completed";
    isLast?: boolean;
  };

export default function DayActivity({ name, day, hour, status, isLast }: DayActivityProps) {
  return (
    <View className="justify-star flex flex-row gap-1">
      <View className="items-center">
        <View
          className={`h-9 w-9 items-center justify-center rounded-full border-4 border-primary ${status === "completed" ? "bg-teal-200" : "border-primary bg-transparent"}`}
        >
          {status === "completed" && <Check size={17} color="white" />}
          {status === "pending" && <Dot size={30} color="white" />}
        </View>

        {!isLast && <View className="my-1 min-h-[40px] w-0.5 flex-1 bg-primary" />}
      </View>
      <View className="ml-2">
        <Text className="text-lg font-bold">{name}</Text>
        <Text className="text-sm text-muted-foreground">
          {day} · {hour}
        </Text>
      </View>
    </View>
  );
}
