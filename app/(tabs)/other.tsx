import { ClientProfileCard } from "@/components/ui/client-profile-card";
import { SettingsCard } from "@/components/ui/settings-card";
import { MapPin, CreditCard, Bell, Globe } from "lucide-react-native";
import { ScrollView, Switch } from "react-native";

export default function OtherScreen() {
  // const projects = [
  //   {
  //     name: "Kitchen Renovation",
  //     description: "Complete remodel of a kitchen including new pipes and fixtures.",
  //     images: [
  //       "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  //       "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
  //     ],
  //     date: "2024",
  //     rating: 4.8,
  //     category: "Plumbing",
  //     completed: true,
  //   },
  //   {
  //     name: "Kitchen Renovation",
  //     description: "Complete remodel of a kitchen including new pipes and fixtures.",
  //     images: [
  //       "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  //       "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
  //     ],
  //     date: "2024",
  //     rating: 4.8,
  //     category: "Plumbing",
  //     completed: true,
  //   },
  //   {
  //     name: "Kitchen Renovation",
  //     description: "Complete remodel of a kitchen including new pipes and fixtures.",
  //     images: [
  //       "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  //       "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
  //     ],
  //     date: "2024",
  //     rating: 4.8,
  //     category: "Plumbing",
  //     completed: true,
  //   },
  //   {
  //     name: "Kitchen Renovation",
  //     description: "Complete remodel of a kitchen including new pipes and fixtures.",
  //     images: [
  //       "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  //       "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
  //     ],
  //     date: "2024",
  //     rating: 4.8,
  //     category: "Plumbing",
  //     completed: true,
  //   },
  //   {
  //     name: "Kitchen Renovation",
  //     description: "Complete remodel of a kitchen including new pipes and fixtures.",
  //     images: [
  //       "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  //       "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
  //     ],
  //     date: "2024",
  //     rating: 4.8,
  //     category: "Plumbing",
  //     completed: true,
  //   },
  // ];
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="gap-6 p-6 mt-5"
      keyboardShouldPersistTaps="handled"
    >
      {/* <WorkerProfileHeader
        name="Marcos Rivera"
        imageUrl="https://github.com/shadcn.png"
        badgeText="Top Rated Plumber"
        rating={4.9}
        reviewsCount={312}
        jobsCompletedText="150+ Jobs Completed"
        isOnline={true}
        projects={projects}
      /> */}
      <ClientProfileCard name="Carlos Mendoza" email="carlos.mendoza@email.com" />
      <SettingsCard
        title="Account"
        items={[
          {
            id: "addr",
            icon: MapPin,
            title: "Saved Addresses",
            subtitle: "Home, Office",
            href: undefined,
          },
          { id: "pay", icon: CreditCard, title: "Payment Methods", href: undefined },
        ]}
      />

      <SettingsCard
        title="Preferences"
        items={[
          {
            id: "push",
            icon: Bell,
            title: "Push Notifications",
            control: <Switch />,
          },
          { id: "lang", icon: Globe, title: "Language", linkLabel: "English", href: undefined },
        ]}
      />
    </ScrollView>
  );
}
