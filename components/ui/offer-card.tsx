import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ClientAvatar } from "@/components/ui/client-avatar";
import { OfferSummaryCard } from "@/components/ui/offer-summary-card";
import { Text } from "@/components/ui/text";
import { UserRatingHeader } from "@/components/ui/user-rating-header";
import { cn } from "@/lib/utils";
import { View } from "react-native";

type OfferCardProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    name: string;
    avatarUrl?: string | null;
    rating: number;
    reviewCount: number;
    badgeLabel?: string;
    price: string | number;
    eta: string;
    distance: string;
    acceptLabel?: string;
    onAccept?: () => void;
    disabled?: boolean;
  };

function OfferCard({
  name,
  avatarUrl,
  rating,
  reviewCount,
  badgeLabel = "Top Rated",
  price,
  eta,
  distance,
  acceptLabel = "Accept Offer",
  onAccept,
  disabled,
  className,
  ...props
}: OfferCardProps) {
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

      <Button onPress={onAccept} disabled={disabled}>
        <Text>
          {acceptLabel} · {typeof price === "number" ? `$${price}` : price}
        </Text>
      </Button>
    </Card>
  );
}

export { OfferCard };
export type { OfferCardProps };
