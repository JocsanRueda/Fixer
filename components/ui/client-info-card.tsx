import { Card } from "@/components/ui/card";
import { ClientAvatar } from "@/components/ui/client-avatar";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { View } from "react-native";

type ClientInfoCardProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    name: string;
    subtitle: string;
    avatarUrl?: string | null;
    avatarSize?: React.ComponentProps<typeof ClientAvatar>["size"];
    avatarColor?: React.ComponentProps<typeof ClientAvatar>["color"];
    avatarClassName?: string;
    nameClassName?: string;
    subtitleClassName?: string;
  };

function ClientInfoCard({
  name,
  subtitle,
  avatarUrl,
  avatarSize = "lg",
  avatarColor,
  avatarClassName,
  nameClassName,
  subtitleClassName,
  className,
  ...props
}: ClientInfoCardProps) {
  return (
    <Card className={cn("flex-row items-center gap-3 p-4", className)} {...props}>
      <ClientAvatar
        name={name}
        imageUrl={avatarUrl}
        size={avatarSize}
        color={avatarColor}
        className={avatarClassName}
      />
      <View className="flex-1 gap-0.5">
        <Text className={cn("text-base font-semibold", nameClassName)}>{name}</Text>
        <Text className={cn("text-sm text-muted-foreground", subtitleClassName)}>{subtitle}</Text>
      </View>
    </Card>
  );
}

export { ClientInfoCard };
export type { ClientInfoCardProps };
