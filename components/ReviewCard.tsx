"use client";

import { getStarRepresentation } from "@/lib/getStarRating";
import Image from "next/image";

interface Props {
  review: {
    id: number;
    user: string;
    rating: number;
    content: string;
    date: string;
    image: string;
  };
}

export default function ReviewCard({
  review: { user, rating, content, date, image },
}: Props) {
  return (
    <div className="bg-white rounded-lg border shadow p-3 space-y-3">
      <div className="flex justify-between items-center">
        <Image
          src={image}
          alt={user}
          className="h-20 w-20 object-cover rounded-full"
          width={500}
          height={500}
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold font-primary">{user}</h2>
          <div className="flex items-center gap-2 font-medium text-sm">
            <span className="flex">{getStarRepresentation(rating)}</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-foreground">{date}</p>
      </div>
      <p className="text-sm font-medium text-gray-600">{content}</p>
    </div>
  );
}
