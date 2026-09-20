import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type * as AvatarPrimitive from "@rn-primitives/avatar";

const avatarSizeVariants = cva("", {
  variants: {
    size: {
      sm: "size-8",
      default: "size-10",
      lg: "size-14",
      xl: "size-20",
    },
  },
  defaultVariants: { size: "default" },
});

const avatarColorVariants = cva("", {
  variants: {
    color: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      muted: "bg-muted",
      destructive: "bg-destructive",
    },
  },
  defaultVariants: { color: "primary" },
});

const avatarTextVariants = cva("font-semibold", {
  variants: {
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-lg",
      xl: "text-2xl",
    },
    color: {
      primary: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      accent: "text-accent-foreground",
      muted: "text-muted-foreground",
      destructive: "text-white",
    },
  },
  defaultVariants: { size: "default", color: "primary" },
});

function getInitials(name: string) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0]!.slice(0, 2).toUpperCase();
  return `${words[0]![0]}${words[words.length - 1]![0]}`.toUpperCase();
}

type ClientAvatarProps = Omit<React.ComponentProps<typeof AvatarPrimitive.Root>, "alt"> &
  VariantProps<typeof avatarSizeVariants> &
  VariantProps<typeof avatarColorVariants> & {
    name: string;
    imageUrl?: string | null;
    alt?: string;
    fallbackClassName?: string;
    textClassName?: string;
  };

function ClientAvatar({
  name,
  imageUrl,
  alt,
  size,
  color,
  className,
  fallbackClassName,
  textClassName,
  ...props
}: ClientAvatarProps) {
  return (
    <Avatar alt={alt ?? name} className={cn(avatarSizeVariants({ size }), className)} {...props}>
      {imageUrl ? <AvatarImage source={{ uri: imageUrl }} /> : null}
      <AvatarFallback className={cn(avatarColorVariants({ color }), fallbackClassName)}>
        <Text className={cn(avatarTextVariants({ size, color }), textClassName)}>
          {getInitials(name)}
        </Text>
      </AvatarFallback>
    </Avatar>
  );
}

export { ClientAvatar, getInitials };
export type { ClientAvatarProps };
