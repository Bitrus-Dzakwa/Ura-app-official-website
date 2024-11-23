import MessageCard from "@/components/MessageCard";
import TopNav from "@/components/shared/TopNav";

export const messageData = [
  {
    id: 1,
    message: "Hello, this is the first message.",
    sender: "John Joe",
    img: "/assets/msg16.svg",
  },
  {
    id: 2,
    message: "This is the second message.",
    sender: "Jane Doe",
    img: "/assets/msg17.svg",
  },
  {
    id: 3,
    message: "Hello, this is the third message.",
    sender: "John Joe",
    img: "/assets/msg18.svg",
  },
];

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
