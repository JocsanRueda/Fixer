import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Camera, Mic } from "lucide-react-native";
import type { TextInput } from "react-native";
import { View } from "react-native";

type MediaTextareaProps = React.ComponentProps<typeof TextInput> &
  React.RefAttributes<TextInput> & {
    containerClassName?: string;
    onPhotoPress?: () => void;
    onAudioPress?: () => void;
    photoLabel?: string;
    audioLabel?: string;
  };

function MediaTextarea({
  containerClassName,
  className,
  onPhotoPress,
  onAudioPress,
  photoLabel = "Photo",
  audioLabel = "Audio",
  ...props
}: MediaTextareaProps) {
  return (
    <View className={cn("relative", containerClassName)}>
      <Textarea className={cn("pb-14", className)} {...props} />
      <View className="absolute bottom-3 right-2 flex-row gap-2">
        <Button variant="outline" size="sm" onPress={onPhotoPress}>
          <Icon as={Camera} />
          <Text>{photoLabel}</Text>
        </Button>
        <Button variant="outline" size="sm" onPress={onAudioPress}>
          <Icon as={Mic} />
          <Text>{audioLabel}</Text>
        </Button>
      </View>
    </View>
  );
}

export { MediaTextarea };
export type { MediaTextareaProps };
