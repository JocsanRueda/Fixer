import { BudgetInput } from "@/components/ui/budget-input";
import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/ui/category-card";
import { MediaTextarea } from "@/components/ui/media-textarea";
import { Text } from "@/components/ui/text";
import { JOB_CATEGORIES } from "@/lib/categories";
import { useEffect, useState } from "react";
import { Keyboard, Platform, ScrollView, View } from "react-native";

export default function NewRequestScreen() {
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("50");
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    // Android edge-to-edge doesn't resize the window, so KeyboardAvoidingView can't detect
    // the keyboard height reliably — track it manually and reserve scroll space instead.
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvent, (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    });
    const hideSub = Keyboard.addListener(hideEvent, () => setKeyboardHeight(0));

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const categoryCards = [];
  for (const category of JOB_CATEGORIES) {
    categoryCards.push(
      <CategoryCard
        key={category.id}
        icon={category.icon}
        label={category.label}
        selected={categoryId === category.id}
        onPress={() => setCategoryId(category.id)}
      />,
    );
  }

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="gap-6 p-6 mt-10"
      keyboardShouldPersistTaps="handled"
    >
      <View className="gap-1.5">
        <Text className="text-xs font-semibold uppercase tracking-wide text-primary">New job</Text>
        <Text variant="h1" className="text-left">
          What do you need fixed?
        </Text>
      </View>

      <View className="gap-3">
        <Text className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Select category
        </Text>
        <View className="flex-row flex-wrap gap-3">{categoryCards}</View>
      </View>

      <View className="gap-3">
        <Text className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Describe the problem
        </Text>
        <MediaTextarea
          placeholder="e.g. Kitchen sink has been leaking for 2 days, water under the cabinet..."
          value={description}
          onChangeText={setDescription}
          onPhotoPress={() => {}}
          onAudioPress={() => {}}
        />
      </View>

      <View className="gap-2">
        <Text className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Suggested budget
        </Text>
        <BudgetInput value={budget} onChangeText={setBudget} />
        <Text className="text-sm text-muted-foreground">
          Technicians will see your budget and can negotiate their price.
        </Text>
      </View>

      <Button size="lg" className="mt-2">
        <Text>Find Technicians Near Me</Text>
      </Button>

      <View style={{ height: keyboardHeight }} />
    </ScrollView>
  );
}
