import MessageCard from "@/components/MessageCard";
import TopNav from "@/components/shared/TopNav";
import { messageData } from "@/lib/mockData";

export default function page() {
  return (
    <div className="min-h-dvh bg-white">
      <TopNav />
      <div className="container mx-auto p-4  gap-4 flex flex-col">
        {messageData.map((msg) => (
          <MessageCard key={msg.id} msg={msg} />
        ))}
      </div>
    </div>
  );
}
