import { ClientInfoCard } from "@/components/ui/client-info-card";
import { InfoBanner } from "@/components/ui/info-banner";
import { OfferCard } from "@/components/ui/offer-card";
import { StarRatingInput } from "@/components/ui/star-rating-input";
import { Text } from "@/components/ui/text";
import { WorkerTrackingCard } from "@/components/ui/worker-tracking-Card";
import { DollarSign } from "lucide-react-native";
import { ScrollView, View } from "react-native";

export default function RateScreen() {
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
      <ClientInfoCard
        name="Marcos Rivera"
        subtitle="Plumbing · Kitchen Sink Repair"
        avatarColor="secondary"
      />
      <InfoBanner
        icon={DollarSign}
        variant="warning"
        title="Pay 100% directly to the technician"
        description="Settle via cash or bank transfer. Our platform does not process payments — your agreement is with the technician."
      />
      {/* <OfferSummaryCard
        // datos (obligatorios)
        price="$85"
        eta="12 min"
        distance="0.8 km"
        // etiquetas
        priceLabel="ofrecido"
        etaLabel="llegada"
        distanceLabel="distancia"

        distanceIcon={Truck}
        // colores/estilos
        className="bg-slate-900" // color de fondo del card (default: bg-foreground)
        priceClassName="text-emerald-400" // color/tamaño del valor del precio
        etaClassName="text-white"
        distanceClassName="text-white"
        iconClassName="text-white/80" // color de ambos íconos
        labelClassName="uppercase tracking-wide text-white" // estilo compartido de las 3 etiquetas
        itemClassName="py-5" // padding/alineación de cada columna
        variant="default" // o "card" para usar colores del theme (bg-card/border-border)
        borderClassName="border-white/20"
      />
      <View className="flex-row items-center gap-3">
        <ClientAvatar
          name="Marcos Rivera"
          size="lg"
          color="secondary"
          imageUrl={"https://avatars.githubusercontent.com/u/69878030?s=96&v=4"}
        />
        <UserRatingHeader
          name="Marcos Rivera"
          badgeLabel="Top Rated"
          rating={4.9}
          reviewCount={212}
          reviewLabel="reviews"
        /> */}
      {/* </View> */}

      <View>
        <OfferCard
          name="Marcos Rivera"
          rating={4.9}
          reviewCount={312}
          price={85}
          eta="12 min"
          distance="0.8 km"
          onAccept={() => {
            /* handle accept */
          }}
        />
      </View>

      <View>
        <WorkerTrackingCard
          name="Marcos Rivera"
          rating={4.9}
          reviewCount={312}
          eta="12 min"
          distance="0.8 km"
          onAccept={() => {
            /* handle accept */
          }}
        />
      </View>

      <StarRatingInput defaultValue={5} onChange={() => {}} />
    </ScrollView>
  );
}
