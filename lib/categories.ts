import {
  Droplets,
  Monitor,
  Paintbrush,
  PencilRuler,
  Shield,
  Thermometer,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react-native";

export type JobCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const JOB_CATEGORIES: JobCategory[] = [
  { id: "plumbing", label: "Plumbing", icon: Droplets },
  { id: "electrical", label: "Electrical", icon: Zap },
  { id: "hvac", label: "HVAC", icon: Thermometer },
  { id: "carpentry", label: "Carpentry", icon: PencilRuler },
  { id: "electronics", label: "Electronics", icon: Monitor },
  { id: "painting", label: "Painting", icon: Paintbrush },
  { id: "security", label: "Security", icon: Shield },
  { id: "general", label: "General", icon: Wrench },
];
