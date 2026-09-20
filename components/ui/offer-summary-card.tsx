import { Icon } from "@/components/ui/icon";
import { Text, TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Clock, Navigation, type LucideIcon } from "lucide-react-native";
import { View } from "react-native";

const offerSummaryCardVariants = cva("flex-row rounded-xl", {
  variants: {
    variant: {
      default: "bg-foreground",
      card: "border border-border bg-card",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const offerSummaryItemVariants = cva("flex-1 items-center gap-1 px-2 py-4", {
  variants: {
    variant: {
      default: "border-background/15",
      card: "border-border",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const offerSummaryLabelVariants = cva("text-xs", {
  variants: {
    variant: {
      default: "text-background/90",
      card: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type OfferSummaryCardVariantProps = VariantProps<typeof offerSummaryCardVariants>;

type OfferSummaryCardProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> &
  OfferSummaryCardVariantProps & {
    price: string | number;
    priceLabel?: string;
    priceClassName?: string;
    eta: string;
    etaLabel?: string;
    etaIcon?: LucideIcon;
    etaClassName?: string;
    distance: string;
    distanceLabel?: string;
    distanceIcon?: LucideIcon;
    distanceClassName?: string;
    iconClassName?: string;
    itemClassName?: string;
    labelClassName?: string;
    borderClassName?: string;
  };

function OfferSummaryCard({
  variant,
  price,
  priceLabel = "offered",
  priceClassName,
  eta,
  etaLabel = "ETA",
  etaIcon: EtaIcon = Clock,
  etaClassName,
  distance,
  distanceLabel = "away",
  distanceIcon: DistanceIcon = Navigation,
  distanceClassName,
  iconClassName,
  itemClassName,
  labelClassName,
  className,
  borderClassName,
  ...props
}: OfferSummaryCardProps) {
  return (
    <TextClassContext.Provider
      value={variant === "card" ? "text-card-foreground" : "text-background"}
    >
      <View className={cn(offerSummaryCardVariants({ variant }), className)} {...props}>
        <View className={cn(offerSummaryItemVariants({ variant }), "border-r", borderClassName)}>
          <Text className={cn("text-lg font-bold text-emerald-400", priceClassName)}>{price}</Text>
          <Text className={cn(offerSummaryLabelVariants({ variant }), labelClassName)}>
            {priceLabel}
          </Text>
        </View>

        <View
          className={cn(
            offerSummaryItemVariants({ variant }),
            itemClassName,
            "flex-row items-center border-r",
            borderClassName,
          )}
        >
          <Icon as={EtaIcon} size={16} className={cn("mx-1.5", iconClassName)} />
          <View className="items-center">
            <Text className={cn("text-lg font-bold", etaClassName)}>{eta}</Text>
            <Text className={cn(offerSummaryLabelVariants({ variant }), labelClassName)}>
              {etaLabel}
            </Text>
          </View>
        </View>

        <View
          className={cn(
            offerSummaryItemVariants({ variant }),
            itemClassName,
            "flex-row items-center",
            borderClassName,
          )}
        >
          <Icon as={DistanceIcon} size={16} className={cn("mx-1.5", iconClassName)} />
          <View className="items-center">
            <Text className={cn("text-lg font-bold", distanceClassName)}>{distance}</Text>
            <Text className={cn(offerSummaryLabelVariants({ variant }), labelClassName)}>
              {distanceLabel}
            </Text>
          </View>
        </View>
      </View>
    </TextClassContext.Provider>
  );
}

export { OfferSummaryCard };
export type { OfferSummaryCardProps };
