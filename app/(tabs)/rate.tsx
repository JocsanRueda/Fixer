import { TabScreen } from "@/components/navigation/tab-screen";
import { OfferCard } from "@/components/ui/offer-card";
import { View } from "react-native";

export default function RateScreen() {
  return (
    <TabScreen title="Valorar" description="Valora los servicios que hayas completado.">
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
    </TabScreen>
  );
}
