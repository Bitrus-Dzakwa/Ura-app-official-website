import ExploreCard from "@/components/ExploreCard";
import MobileNav from "@/components/shared/MobileNav";
import TopNav from "@/components/shared/TopNav";
import { ExploreMarketData } from "@/lib/mockData";

export default function Home() {
  return (
    <main className="relative bg-gray-50 dark:bg-gray-800 min-h-dvh">
      <TopNav title="explore market" />
      <div className="flex flex-col gap-5 p-5">
        {ExploreMarketData.map((explore) => {
          return <ExploreCard key={explore.id} explore={explore} />;
        })}
      </div>
      <MobileNav />
    </main>
  );
}
