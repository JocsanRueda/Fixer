import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react-native";
import * as React from "react";
import { Pressable, View } from "react-native";

const DEFAULT_LABELS = ["Poor", "Fair", "Good", "Very Good", "Excellent!"];

type StarRatingInputProps = {
  value?: number;
  defaultValue?: number;
  onChange?: (rating: number) => void;
  maxRating?: number;
  labels?: string[];
  disabled?: boolean;
  className?: string;
  starClassName?: string;
  labelClassName?: string;
  starSize?: number;
};

function StarRatingInput({
  value,
  defaultValue = 0,
  onChange,
  maxRating = 5,
  labels = DEFAULT_LABELS,
  disabled = false,
  className,
  starClassName,
  labelClassName,
  starSize = 36,
}: StarRatingInputProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const rating = value ?? internalValue;

  function handlePress(position: number) {
    if (disabled) return;
    const nextRating = position === rating ? 0 : position;
    if (value === undefined) setInternalValue(nextRating);
    onChange?.(nextRating);
  }

  const label = rating > 0 ? labels[rating - 1] : undefined;

  return (
    <View
      className={cn("items-center gap-3 rounded-2xl border border-border bg-card p-6", className)}
    >
      <View className="flex-row items-center gap-2">
        {Array.from({ length: maxRating }, (_, index) => {
          const position = index + 1;
          const filled = position <= rating;

          return (
            <Pressable
              key={position}
              disabled={disabled}
              onPress={() => handlePress(position)}
              accessibilityRole="button"
              accessibilityLabel={`${labels[index] ?? position} out of ${maxRating}`}
              accessibilityState={{ selected: filled, disabled }}
              hitSlop={4}
            >
              <Icon
                as={Star}
                size={starSize}
                className={cn(
                  filled ? "text-amber-500" : "text-muted-foreground",
                  disabled && "opacity-50",
                  starClassName,
                )}
                fill={filled ? "currentColor" : "transparent"}
              />
            </Pressable>
          );
        })}
      </View>
      <Text className={cn("text-sm font-semibold text-foreground", labelClassName)}>
        {label ?? "\u00A0"}
      </Text>
    </View>
  );
}

export { StarRatingInput };
export type { StarRatingInputProps };
