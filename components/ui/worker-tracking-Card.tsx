import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClientAvatar } from "@/components/ui/client-avatar";
import { Icon } from "@/components/ui/icon";
import { OfferSummaryCard } from "@/components/ui/offer-summary-card";
import { Text } from "@/components/ui/text";
import { UserRatingHeader } from "@/components/ui/user-rating-header";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react-native";
import { MessageSquare, PhoneCall } from "lucide-react-native";
import { View } from "react-native";

type WorkerTrackingCardProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    name: string;
    avatarUrl?: string | null;
    rating: number;
    reviewCount: number;
    badgeLabel?: string;
    price?: string | number;
    eta: string;
    distance: string;
    acceptLabel?: string;
    onAccept?: () => void;
    disabled?: boolean;
  };

function WorkerTrackingCard({
  name,
  avatarUrl,
  rating,
  reviewCount,
  badgeLabel = "Top Rated",
  price,
  eta,
  distance,
  acceptLabel = "Cancel Service",
  onAccept,
  disabled,
  className,
  ...props
}: WorkerTrackingCardProps) {
  return (
    <Card className={cn("gap-4 p-4", className)} {...props}>
      <View className="flex-row items-center gap-3">
        <ClientAvatar name={name} imageUrl={avatarUrl} size="lg" />
        <UserRatingHeader
          name={name}
          rating={rating}
          reviewCount={reviewCount}
          badgeLabel={badgeLabel}
          className="flex-1"
        />
      </View>

      <OfferSummaryCard variant="card" price={price} eta={eta} distance={distance} />

      <View className="flex-row items-center justify-around gap-3">
        <Button onPress={onAccept} disabled={disabled} className="flex-1">
          <Icon as={PhoneCall as LucideIcon} size={16} className="mx-1.5 text-secondary" />
          <Text>Call</Text>
        </Button>

        <Button onPress={onAccept} disabled={disabled} className="flex-1">
          <Icon as={MessageSquare as LucideIcon} size={16} className="mx-1.5 text-secondary" />
          <Text>Message</Text>
        </Button>
      </View>

      <Button onPress={onAccept} disabled={disabled}>
        <Text>{acceptLabel}</Text>
      </Button>
    </Card>
  );
}

export { WorkerTrackingCard };
export type { WorkerTrackingCardProps };
