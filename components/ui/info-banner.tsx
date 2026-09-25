import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react-native";
import { View } from "react-native";

const infoBannerVariants = cva("flex-row gap-3 rounded-xl border p-4", {
  variants: {
    variant: {
      default: "border-border bg-card",
      primary: "border-primary bg-primary/5",
      success: "border-emerald-500 bg-emerald-500/5",
      warning: "border-amber-500 bg-amber-500/5",
      destructive: "border-destructive bg-destructive/5",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const infoBannerIconVariants = cva("mt-0.5", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-primary",
      success: "text-emerald-500",
      warning: "text-amber-500",
      destructive: "text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const infoBannerTitleVariants = cva("font-semibold", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-primary",
      success: "text-emerald-500",
      warning: "text-amber-500",
      destructive: "text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type InfoBannerProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> &
  VariantProps<typeof infoBannerVariants> & {
    icon: LucideIcon;
    title: string;
    description: string;
    iconClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
  };

function InfoBanner({
  icon,
  title,
  description,
  variant,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
  ...props
}: InfoBannerProps) {
  return (
    <View className={cn(infoBannerVariants({ variant }), className)} {...props}>
      <Icon
        as={icon}
        size={18}
        className={cn(infoBannerIconVariants({ variant }), iconClassName)}
      />
      <View className="flex-1 gap-1">
        <Text className={cn(infoBannerTitleVariants({ variant }), titleClassName)}>{title}</Text>
        <Text className={cn("text-sm text-muted-foreground", descriptionClassName)}>
          {description}
        </Text>
      </View>
    </View>
  );
}

export { InfoBanner, infoBannerIconVariants, infoBannerTitleVariants, infoBannerVariants };
export type { InfoBannerProps };
