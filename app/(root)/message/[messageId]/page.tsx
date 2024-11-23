import React from "react";
import { messageData } from "../page";
import TopNav from "@/components/shared/TopNav";
import Image from "next/image";

export default function page({ params }: { params: { messageId: string } }) {
  const { messageId } = params;
  const id = Number(messageId);
  const msg = messageData.filter((item) => item.id === id)[0];

  const messages = [
    {
      id: 1,
      msgUser: "John Doe",
      img: "/images/user1.jpg",
      message: "Hello, how are you today?",
      createdAt: new Date("2022-01-01 12:00:00"),
    },
    {
      id: 2,
      msgUser: "userName",
      img: "/images/user2.jpg",
      message: "Hi John, I'm doing well. How about you?",
      createdAt: new Date("2022-01-01 12:15:00"),
    },
    {
      id: 3,
      msgUser: "John Doe",
      img: "/images/user1.jpg",
      message: "I'm glad to hear that! Did you have a good day?",
      createdAt: new Date("2022-01-01 12:30:00"),
    },
    {
      id: 4,
      msgUser: "userName",
      img: "/images/user2.jpg",
      message:
        "Yes, I did! I'm glad you're enjoying our chat. Have a great day!",
      createdAt: new Date("2022-01-01 12:45:00"),
    },
    {
      id: 5,
      msgUser: "John Doe",
      img: "/images/user1.jpg",
      message: "You're welcome! I'm glad we could help. Have a great day too!",
      createdAt: new Date("2022-01-01 13:00:00"),
    },
  ];

  return (
    <div className="min-h-dvh bg-white">
      <TopNav />
      <div className="flex flex-col gap-8 p-5">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={msg.img}
            alt={msg.sender}
            className="h-24 w-24 object-cover"
            width={500}
            height={500}
          />
          <p className="">{msg.sender}</p>
        </div>

        <div
          className="flex flex-col gap-4
          "
        >
          {messages.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col gap-2 max-w-fit w-11/12 rounded-xl bg-orange-50 ${
                item.msgUser === "userName"
                  ? "self-end rounded-tr-none"
                  : "rounded-tl-none"
              } shadow p-4`}
            >
              <p className="text-sm text-gray-600">{item.message}</p>
              <p className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
