import { Text, TextClassContext } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { Platform, TextInput, View } from "react-native";

const budgetInputVariants = cva("flex-row items-center gap-2 rounded-xl border px-4 py-3", {
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

const budgetInputTextVariants = cva("text-lg font-bold", {
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

type BudgetInputProps = Omit<React.ComponentProps<typeof TextInput>, "value" | "onChangeText"> &
  React.RefAttributes<TextInput> &
  VariantProps<typeof budgetInputVariants> & {
    value: string;
    onChangeText?: (value: string) => void;
    currency?: string;
    containerClassName?: string;
    currencyClassName?: string;
  };

function BudgetInput({
  value,
  onChangeText,
  currency = "$",
  variant,
  editable = true,
  className,
  containerClassName,
  currencyClassName,
  placeholder,
  ...props
}: BudgetInputProps) {
  return (
    <TextClassContext.Provider value={budgetInputTextVariants({ variant })}>
      <View
        className={cn(
          budgetInputVariants({ variant }),
          editable === false && "opacity-50",
          containerClassName,
        )}
      >
        <Text className={cn(currencyClassName)}>{currency}</Text>
        <TextInput
          className={cn(
            "flex-1 text-lg font-bold text-foreground",
            Platform.select({ web: "outline-none" }),
            className,
          )}
          value={value}
          onChangeText={onChangeText}
          editable={editable}
          keyboardType="numeric"
          inputMode="numeric"
          placeholder={placeholder}
          {...props}
        />
      </View>
    </TextClassContext.Provider>
  );
}

export { BudgetInput, budgetInputTextVariants, budgetInputVariants };
export type { BudgetInputProps };
