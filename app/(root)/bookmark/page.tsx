import BookmarkCard from "@/components/BookmarkCard";
import TopNav from "@/components/shared/TopNav";

export const bookMarkData = [
  {
    id: 1,
    title: "Bella Boutique",
    content: "your go-to store for female wears",
    img: "/assets/bookMark19.svg",
  },
  {
    id: 2,
    title: "Piim fashion",
    content: "the world's most expensive brand",
    img: "/assets/bookMark18.svg",
  },
  {
    id: 3,
    title: "Patagonia",
    content: "the world's best footwear brand",
    img: "/assets/bookMark17.svg",
  },
  {
    id: 4,
    title: "Zara",
    content: "the world's most popular women's fashion brand",
    img: "/assets/bookMark16.svg",
  },
];

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
