import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Text, TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react-native";
import { Platform, Pressable } from "react-native";

type CategoryCardProps = React.ComponentProps<typeof Pressable> &
  React.RefAttributes<typeof Pressable> & {
    icon: LucideIcon;
    label: string;
    selected?: boolean;
    iconClassName?: string;
  };

function CategoryCard({
  icon,
  label,
  selected,
  iconClassName,
  className,
  disabled,
  ...props
}: CategoryCardProps) {
  return (
    <Pressable
      className={cn(disabled && "opacity-50", Platform.select({ web: "outline-none" }))}
      disabled={disabled}
      role="button"
      accessibilityState={{ selected, disabled: disabled ?? undefined }}
      {...props}
    >
      <Card
        className={cn(
          "aspect-square w-20 items-center justify-center gap-1.5 p-2 shadow-none",
          selected && "border-primary bg-primary/10",
          className,
        )}
      >
        <TextClassContext.Provider value={selected ? "text-primary" : "text-foreground"}>
          <Icon as={icon} size={20} className={iconClassName} />
          <Text className="text-center text-xs font-medium">{label}</Text>
        </TextClassContext.Provider>
      </Card>
    </Pressable>
  );
}

export { CategoryCard };
export type { CategoryCardProps };
