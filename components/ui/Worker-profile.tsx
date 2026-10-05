import { Image, ScrollView, View } from "react-native";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Text } from "@/components/ui/text";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react-native";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./testimonial-card";

type Project = {
  name: string;
  description?: string;
  images?: string[];
  date?: string;
  rating?: number;
  link?: string;
  completed?: boolean;
  category?: string;
};

type WorkerProjectsProps = {
  projects?: Project[];
};

type WorkerProfileSkillsProps = {
  skills?: string[];
};

type WorkerProfileHeaderProps = React.ComponentProps<typeof View> &
  React.RefAttributes<typeof View> & {
    imageUrl?: string;
    name: string;
    badgeText?: string;
    rating?: number | string;
    reviewsCount?: number | string;
    jobsCompletedText?: string;
    isOnline?: boolean;
    projects?: Project[];
  };

type WorkerProfileAboutProps = {
  aboutText?: string;
};

function WorkerProfileHeader({
  imageUrl,
  name,
  badgeText,
  rating,
  reviewsCount,
  jobsCompletedText,
  isOnline = false,
  projects,
  className,
}: WorkerProfileHeaderProps) {
  return (
    <View className={cn("my-1 items-center justify-center gap-4", className)}>
      <View className="relative">
        {/** Avatar with fallback and online status indicator */}
        <Avatar className="h-28 w-28" alt={name}>
          <AvatarImage source={{ uri: imageUrl }} />
          <AvatarFallback>
            <Text className="text-3xl font-semibold text-foreground">{name.charAt(0)}</Text>
          </AvatarFallback>
        </Avatar>
        {isOnline && (
          <View className="absolute bottom-1 right-1 h-6 w-6 rounded-full border-4 border-background bg-green-500" />
        )}
      </View>

      <Text className="mt-2 text-3xl font-bold text-foreground">{name}</Text>

      {/** Badge section */}

      {badgeText && (
        <Badge variant="outline" className="rounded-full bg-secondary/20 px-5 py-1.5">
          <Text className="text-sm font-medium text-secondary-foreground">{badgeText}</Text>
        </Badge>
      )}

      {/** Rating and reviews section */}

      <View className="mt-2 flex-row flex-wrap items-center justify-center gap-2">
        {(rating || reviewsCount) && (
          <View className="flex-row items-center gap-1">
            <Star size={16} color="#0ea5e9" fill="#0ea5e9" />
            <Text className="ml-1 font-bold text-sky-500">{rating}</Text>
            {<Text className="ml-1 text-muted-foreground">({reviewsCount} reviews)</Text>}
          </View>
        )}

        <Text className="px-1 text-muted-foreground">•</Text>
        <Text className="text-muted-foreground">{jobsCompletedText}</Text>
      </View>
      {/** About section */}
      <WorkerProfileAbout aboutText="Experienced plumber with over 10 years in the industry. asgsfdgs sdfgsdfgsdsdfgsdfgsdfgsdf gdf" />
      {/** Skills section */}
      <WorkerProfileSkills skills={["Plumbing", "Pipe Fitting", "Leak Repair", "Drain Cleaning"]} />

      {/** Projects section */}
      <WorkerProjects projects={projects} />

      {/* Testimonial section */}
      <TestimonialCard
        authorName="Daniel C."
        date="2 days ago"
        rating={5}
        review="Marcos was incredibly fast and fixed my sink in under 30 minutes. Highly recommended!"
      />
      <TestimonialCard
        authorName="Daniel C."
        date="2 days ago"
        rating={5}
        review="Marcos was incredibly fast and fixed my sink in under 30 minutes. Highly recommended!"
      />
      <TestimonialCard
        authorName="Daniel C."
        date="2 days ago"
        rating={5}
        review="Marcos was incredibly fast and fixed my sink in under 30 minutes. Highly recommended!"
      />
      <TestimonialCard
        authorName="Daniel C."
        date="2 days ago"
        rating={5}
        review="Marcos was incredibly fast and fixed my sink in under 30 minutes. Highly recommended!"
      />
      <TestimonialCard
        authorName="Daniel C."
        date="2 days ago"
        rating={5}
        review="Marcos was incredibly fast and fixed my sink in under 30 minutes. Highly recommended!"
      />
    </View>
  );
}

function WorkerProfileAbout({ aboutText }: WorkerProfileAboutProps) {
  if (!aboutText) return null;
  return (
    <View className="mt-4 px-1">
      <Text className="mb-2 font-bold text-muted-foreground">ABOUT</Text>
      <Text className="text-muted-foreground">{aboutText}</Text>
    </View>
  );
}

function WorkerProfileSkills({ skills }: WorkerProfileSkillsProps) {
  if (!skills || skills.length === 0) return null;
  return (
    <View className="mt-4 px-1">
      <Text className="mb-2 font-bold text-muted-foreground">SKILLS</Text>
      <View className="flex-row flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="rounded-full bg-secondary/50 px-3 py-1.5">
            <Text className="text-sm font-medium text-secondary-foreground">{skill}</Text>
          </Badge>
        ))}
      </View>
    </View>
  );
}

function WorkerProjects({ projects }: WorkerProjectsProps) {
  if (!projects || projects.length === 0) return null;
  return (
    <View className="mt-4 self-stretch px-1">
      <Text className="mb-2 font-bold text-muted-foreground">PAST WORK</Text>
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-xs font-medium text-primary">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </Text>
      </View>
      <ScrollView
        horizontal
        nestedScrollEnabled
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        className="h-24 flex-grow-0"
        contentContainerClassName="h-24 items-center gap-3"
      >
        {projects.map((project, index) => {
          const imageUrl = project.images?.[0];

          return (
            <View
              key={`${project.name}-${index}`}
              className="h-24 w-24 overflow-hidden rounded-2xl border border-border bg-muted"
              accessibilityRole="image"
              accessibilityLabel={project.name}
            >
              {imageUrl ? (
                <Image
                  source={{ uri: imageUrl }}
                  className="h-full w-full"
                  resizeMode="cover"
                  accessibilityLabel={project.name}
                />
              ) : (
                <View className="flex-1 items-center justify-center">
                  <Text className="text-2xl font-semibold text-muted-foreground">
                    {project.name.charAt(0)}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
export { WorkerProfileHeader, WorkerProfileAbout, WorkerProfileSkills, WorkerProjects };
export type {
  WorkerProfileHeaderProps,
  WorkerProfileAboutProps,
  WorkerProfileSkillsProps,
  WorkerProjectsProps,
};
