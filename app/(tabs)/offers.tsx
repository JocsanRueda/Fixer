import { TabScreen } from "@/components/navigation/tab-screen";
import { BudgetInput } from "@/components/ui/budget-input";
import { MediaTextarea } from "@/components/ui/media-textarea";
import { useState } from "react";
export default function OffersScreen() {
  const [budget, setBudget] = useState("");
  return (
    <TabScreen title="Ofertas" description="Aquí podrás revisar las propuestas de profesionales.">
      <BudgetInput variant="warning" currency="$" value={budget} onChangeText={setBudget} />
      <MediaTextarea
        placeholder="e.g. Kitchen sink has been leaking for 2 days, water under the cabinet..."
        onPhotoPress={() => {}}
        onAudioPress={() => {}}
      />
    </TabScreen>
  );
}
