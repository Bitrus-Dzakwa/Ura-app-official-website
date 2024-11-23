"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  msg: {
    id: number;
    sender: string;
    message: string;
    img: string;
  };
}

export default function MessageCard({
  msg: { id, sender, message, img },
}: Props) {
  const router = useRouter();
  return (
    <div
      className="flex gap-4 items-center border-b pb-4"
      onClick={() => {
        router.push(`/message/${id}`);
      }}
    >
      <Image
        src={img}
        alt={sender}
        className="h-20 w-20 object-cover rounded-full"
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
