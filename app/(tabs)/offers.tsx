import { TabScreen } from "@/components/navigation/tab-screen";
import { MediaTextarea } from "@/components/ui/media-textarea";

export default function OffersScreen() {
  return (
    <>
      <TabScreen
        title="Ofertas"
        description="Aquí podrás revisar las propuestas de profesionales."
      />
      <MediaTextarea
        placeholder="e.g. Kitchen sink has been leaking for 2 days, water under the cabinet..."
        onPhotoPress={() => {}}
        onAudioPress={() => {}}
      />
    </>
  );
}
