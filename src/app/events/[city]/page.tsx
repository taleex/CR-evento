import EventsList from "@/app/components/events-list";
import H1 from "@/app/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  }
}

export function generateMetadata({ params }: EventsPageProps) {
  const city = params.city;

  return {
    title: city === 'all' ? 'Evento - All Events' : `Evento in ${capitalize(city)}`,
  }
}

export default async function EventsPage({
  params, }: EventsPageProps
) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
        <H1 className="mb-28">
        { city === "all" && "All Events" }
        { city !== "all" && `Events in ${capitalize(city)}` }
        </H1>

        <Suspense fallback={<Loading />}>
          <EventsList city={city} />
        </Suspense>

        
    </main>
  )
}
