import { Card } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { View } from "react-native";

type TestimonialCardProps = Omit<React.ComponentProps<typeof Card>, "children"> & {
  authorName: string;
  date?: string;
  rating: number;
  review: string;
  maxRating?: number;
  authorClassName?: string;
  dateClassName?: string;
  ratingClassName?: string;
  starClassName?: string;
  reviewClassName?: string;
};

function TestimonialCard({
  authorName,
  date,
  rating,
  review,
  maxRating = 5,
  className,
  authorClassName,
  dateClassName,
  ratingClassName,
  starClassName,
  reviewClassName,
  ...props
}: TestimonialCardProps) {
  return (
    <Card className={cn("gap-2 rounded-2xl p-4", className)} {...props}>
      <View className="flex-row items-center justify-between gap-3">
        <Text className={cn("text-sm font-semibold", authorClassName)}>{authorName}</Text>
        {date ? (
          <Text className={cn("text-xs text-muted-foreground", dateClassName)}>{date}</Text>
        ) : null}
      </View>

      <Rating
        rating={rating}
        maxRating={maxRating}
        showValue={false}
        showReviewCount={false}
        className={ratingClassName}
        starClassName={cn("text-sky-500", starClassName)}
      />

      <Text className={cn("text-sm leading-5 text-muted-foreground", reviewClassName)}>
        {review}
      </Text>
    </Card>
  );
}

export { TestimonialCard };
export type { TestimonialCardProps };
