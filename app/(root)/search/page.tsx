import SearchCard from "@/components/SearchCard";
import TopNav from "@/components/shared/TopNav";
import { Button } from "@/components/ui/button";
import { ExploreMarketData } from "@/lib/mockData";
import { ArrowUpDown, Clock, LayoutGrid, X } from "lucide-react";

export default function page() {
  const isResult = false;
  return (
    <div className="min-h-dvh">
      <TopNav />
      {isResult ? (
        <div className="flex flex-col gap-4 p-5">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xl">Trending Searches</h3>
            <Button className="">
              <X />
            </Button>
          </div>
          {/* Add your trending search data here */}
          <div className="flex justify-start items-center gap-2 p-2 border-b-2">
            <Clock className="text-slate-700" />
            <span className="text-lg text-slate-700">
              Last updated 15 minutes ago
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-5">
          <div className="flex justify-between items-center p-2 border-b-2">
            <h3 className="font-bold text-xl">Search results</h3>
            <div className="flex gap-5">
              <ArrowUpDown />
              <LayoutGrid />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
            {ExploreMarketData.map((search) => (
              <SearchCard key={search.id} search={search} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
