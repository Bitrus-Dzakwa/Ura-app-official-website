"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  item: { title: string; img: string; content: string };
}

export default function BookmarkCard({ item: { title, img, content } }: Props) {
  return (
    <div className="flex gap-3 bg-white border rounded-lg p-4">
      <Image
        src={img}
        alt={title}
        className="h-24 w-24 object-cover rounded-full"
        height={500}
        width={500}
      />
      <div className="flex flex-col gap-1 w-full">
        <h4 className="uppercase font-semibold text-lg">{title}</h4>
        <p className="">{content}</p>
        <Button className="bg-orange-500 text-white p-3 rounded-2xl self-end">
          View button
        </Button>
      </div>
    </div>
  );
}
