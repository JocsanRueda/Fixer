import { Badge } from "@/components/ui/badge";
import { Rating } from "@/components/ui/rating";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { View } from "react-native";

type UserRatingHeaderProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    name: string;
    rating: number;
    reviewCount: number;
    reviewLabel?: string;
    badgeLabel?: string;
    nameClassName?: string;
    badgeClassName?: string;
    ratingClassName?: string;
  };

function UserRatingHeader({
  name,
  rating,
  reviewCount,
  reviewLabel = "reviews",
  badgeLabel,
  className,
  nameClassName,
  badgeClassName,
  ratingClassName,
  ...props
}: UserRatingHeaderProps) {
  return (
    <View className={cn("gap-1", className)} {...props}>
      <View className="flex-row items-center gap-2">
        <Text className={cn("text-lg font-semibold", nameClassName)}>{name}</Text>
        {badgeLabel ? (
          <Badge variant="secondary" className={badgeClassName}>
            <Text>{badgeLabel}</Text>
          </Badge>
        ) : null}
      </View>
      <Rating
        rating={rating}
        reviewCount={reviewCount}
        reviewLabel={reviewLabel}
        className={ratingClassName}
      />
    </View>
  );
}

export { UserRatingHeader };
export type { UserRatingHeaderProps };
