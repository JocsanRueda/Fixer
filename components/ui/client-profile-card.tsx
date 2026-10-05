import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClientAvatar } from "@/components/ui/client-avatar";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { View } from "react-native";

type ClientProfileCardProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    name: string;
    email: string;
    avatarUrl?: string | null;
    avatarSize?: React.ComponentProps<typeof ClientAvatar>["size"];
    avatarColor?: React.ComponentProps<typeof ClientAvatar>["color"];
    actionLabel?: string;
    actionVariant?: React.ComponentProps<typeof Button>["variant"];
    onActionPress?: () => void;
    hideAction?: boolean;
    avatarClassName?: string;
    nameClassName?: string;
    emailClassName?: string;
  };

function ClientProfileCard({
  name,
  email,
  avatarUrl,
  avatarSize = "xl",
  avatarColor = "primary",
  actionLabel = "Edit Profile",
  actionVariant = "outline",
  onActionPress,
  hideAction = false,
  avatarClassName,
  nameClassName,
  emailClassName,
  className,
  ...props
}: ClientProfileCardProps) {
  return (
    <Card className={cn("flex-row items-center gap-4 p-4", className)} {...props}>
      <ClientAvatar
        name={name}
        imageUrl={avatarUrl}
        size={avatarSize}
        color={avatarColor}
        className={avatarClassName}
      />
      <View className="flex-1 items-start gap-1">
        <Text className={cn("text-lg font-bold", nameClassName)} numberOfLines={1}>
          {name}
        </Text>
        <Text className={cn("text-sm text-muted-foreground", emailClassName)} numberOfLines={1}>
          {email}
        </Text>
        {hideAction ? null : (
          <Button
            variant={actionVariant}
            size="sm"
            className="mt-2 rounded-full"
            onPress={onActionPress}
          >
            <Text>{actionLabel}</Text>
          </Button>
        )}
      </View>
    </Card>
  );
}

export { ClientProfileCard };
export type { ClientProfileCardProps };
