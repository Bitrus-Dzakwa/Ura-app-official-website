"use client";

import Image from "next/image";

interface Props {
  data: {
    id: number;
    src: string;
    title: string;
    price: number;
  };
}

export default function PhotoCard({ data: { src, title, price } }: Props) {
  return (
    <div className="w-full flex-col flex bg-white border">
      <Image
        src={src}
        alt={title}
        className="object-cover w-full"
        width={500}
        height={500}
      />
      <div className="p-2">
        <h2 className="font-semibold leading-none text-lg font-primary capitalize">
          {title}
        </h2>
        <p className="font-display">NGN {price}</p>
      </div>
    </div>
  );
}
