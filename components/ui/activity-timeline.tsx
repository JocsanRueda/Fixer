import { View } from "react-native";
import DayActivity from "./day-activity";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { MessageSquare, X } from "lucide-react-native";

type ActivityItem = {
  name: string;
  day: string;
  hour: string;
  status?: "pending" | "completed";
};

type ActivitiesTimeLineProps = React.ComponentProps<typeof View> &
  React.RefAttributes<typeof View> & {
    activities: ActivityItem[];
  };

function ActivityTimeline({ activities }: ActivitiesTimeLineProps) {
  return (
    <View className="flex-col gap-1">
      <View>
        <Text variant="lead" className="my-2">
          Activity Timeline
        </Text>
      </View>
      <View>
        {activities.map((activity, index) => {
          return (
            <DayActivity
              key={index}
              name={activity.name}
              day={activity.day}
              hour={activity.hour}
              status={index === activities.length - 1 ? "completed" : "pending"}
              isLast={index === activities.length - 1}
            />
          );
        })}
      </View>
      <View className="flex-col gap-2">
        <Button variant="default">
          <MessageSquare size={16} color="white" className="mr-2" />
          <Text>Message Technician</Text>
        </Button>
        <Button variant="ghost">
          <X size={16} color="white" className="mr-2" />
          <Text>Request Project Cancellation</Text>
        </Button>
      </View>
    </View>
  );
}

export { ActivityTimeline };
export type { ActivitiesTimeLineProps, ActivityItem };
