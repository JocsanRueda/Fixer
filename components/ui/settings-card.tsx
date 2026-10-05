import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { Link, type Href } from "expo-router";
import { ChevronRight, type LucideIcon } from "lucide-react-native";
import * as React from "react";
import { Pressable, View } from "react-native";

type SettingsCardItem = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  /** Destination. When set (and no `control`), the row is a link with a trailing chevron. */
  href?: Href;
  /** Text shown next to the chevron for link rows (e.g. the current language). */
  linkLabel?: string;
  /** Custom trailing control (Switch, etc.). Takes precedence over `href`. */
  control?: React.ReactNode;
  /** Used for non-link rows without `control`, or alongside `href`. */
  onPress?: () => void;
  iconClassName?: string;
  /** Show the ">" indicator. Defaults to true for any row without a `control`. */
  showChevron?: boolean;
};

type SettingsCardProps = React.ComponentProps<typeof View> &
  React.RefAttributes<View> & {
    items: SettingsCardItem[];
    /** Optional uppercase section title shown above the card. */
    title?: string;
    titleClassName?: string;
    itemClassName?: string;
  };

function SettingsCardRow({ item, className }: { item: SettingsCardItem; className?: string }) {
  const {
    icon,
    title,
    subtitle,
    href,
    linkLabel,
    control,
    onPress,
    iconClassName,
    showChevron = true,
  } = item;
  const isLink = !control && !!href;

  const content = (
    <View className={cn("flex-row items-center gap-3 px-4 py-3.5", className)}>
      <View className="size-10 items-center justify-center rounded-xl bg-background">
        <Icon as={icon} size={18} className={cn("text-primary", iconClassName)} />
      </View>
      <View className="flex-1 gap-0.5">
        <Text className="text-sm font-semibold text-foreground">{title}</Text>
        {subtitle ? <Text className="text-xs text-muted-foreground">{subtitle}</Text> : null}
      </View>
      {control}
      {!control && showChevron ? (
        <View className="flex-row items-center gap-1">
          {linkLabel ? <Text className="text-sm text-muted-foreground">{linkLabel}</Text> : null}
          <Icon as={ChevronRight} size={16} className="text-muted-foreground" />
        </View>
      ) : null}
    </View>
  );

  if (isLink) {
    return (
      <Link href={href} asChild>
        <Pressable accessibilityRole="link" accessibilityLabel={title} onPress={onPress}>
          {content}
        </Pressable>
      </Link>
    );
  }

  if (!control && onPress) {
    return (
      <Pressable accessibilityRole="button" accessibilityLabel={title} onPress={onPress}>
        {content}
      </Pressable>
    );
  }

  return content;
}

function SettingsCard({
  items,
  title,
  titleClassName,
  itemClassName,
  className,
  ...props
}: SettingsCardProps) {
  return (
    <View className="gap-2">
      {title ? (
        <Text
          className={cn(
            "px-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
            titleClassName,
          )}
        >
          {title}
        </Text>
      ) : null}
      <View
        className={cn("overflow-hidden rounded-2xl border border-border bg-card", className)}
        {...props}
      >
        {items.map((item, index) => (
          <View key={item.id} className={cn(index > 0 && "border-t border-border")}>
            <SettingsCardRow item={item} className={itemClassName} />
          </View>
        ))}
      </View>
    </View>
  );
}

export { SettingsCard };
export type { SettingsCardItem, SettingsCardProps };
