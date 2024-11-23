import BookmarkCard from "@/components/BookmarkCard";
import TopNav from "@/components/shared/TopNav";
import { bookMarkData } from "@/lib/mockData";

export default function page() {
  return (
    <div className="min-h-dvh">
      <TopNav title="Bookmark" />
      <div className="flex flex-col gap-4 p-4">
        {bookMarkData.map((item) => (
          <BookmarkCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
