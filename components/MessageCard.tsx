"use client";

import Image from "next/image";

interface Props {
  msg: {
    sender: string;
    message: string;
    img: string;
  };
}

export default function MessageCard({ msg: { sender, message, img } }: Props) {
  return (
    <div className="flex gap-4 items-center border-b pb-4">
      <Image
        src={img}
        alt={sender}
        className="h-24 w-24 object-cover rounded-full"
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold leading-none">{sender}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
}
