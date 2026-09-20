import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react-native";
import { View } from "react-native";

type RatingProps = {
  rating: number;
  reviewCount: number;
  maxRating?: number;
  reviewLabel?: string;
  className?: string;
  starClassName?: string;
  valueClassName?: string;
  reviewCountClassName?: string;
  starSize?: number;
};

function getStarType(rating: number, position: number) {
  const remainder = rating - position;

  if (remainder >= 0.75) return "full";
  if (remainder >= 0.25) return "half";
  return "empty";
}

function Rating({
  rating,
  reviewCount,
  maxRating = 5,
  reviewLabel = "reviews",
  className,
  starClassName,
  valueClassName,
  reviewCountClassName,
  starSize = 16,
}: RatingProps) {
  const safeMaxRating = Math.max(1, Math.floor(maxRating));
  const safeRating = Math.min(Math.max(rating, 0), safeMaxRating);
  const stars = Array.from({ length: safeMaxRating }, (_, index) => {
    const type = getStarType(safeRating, index);
    const StarIcon = type === "half" ? StarHalf : Star;

    return (
      <Icon
        key={`${type}-${index}`}
        as={StarIcon}
        size={starSize}
        className={cn(type === "empty" ? "text-muted-foreground" : "text-amber-500", starClassName)}
        fill={type === "empty" ? "transparent" : "currentColor"}
        accessibilityElementsHidden
      />
    );
  });

  return (
    <View
      className={cn("flex-row items-center gap-1", className)}
      accessibilityRole="text"
      accessibilityLabel={`${safeRating} out of ${safeMaxRating}, ${reviewCount} ${reviewLabel}`}
    >
      <View className="flex-row items-center">{stars}</View>
      <Text className={cn("text-sm font-semibold", valueClassName)}>{safeRating}</Text>
      <Text className={cn("text-sm text-muted-foreground", reviewCountClassName)}>
        ({reviewCount} {reviewLabel})
      </Text>
    </View>
  );
}

export { Rating };
export type { RatingProps };
