"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  explore: {
    title: string;
    description: string;
    image: string;
    address: string;
    phone: string;
    website: string;
    hour: string;
    category: string;
    email: string;
    reviews: number;
  };
}

export default function ExploreCard({ explore }: Props) {
  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 shadow-xl p-4 border rounded-xl">
      <div className="flex gap-3">
        <div className="w-3/12">
          <Image
            alt={explore.title}
            src={explore.image}
            className="rounded-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-2 w-9/12">
          <div className="flex flex-col">
            <h2 className="font-display font-medium text-xl capitalize slate-800">
              {explore.title}
            </h2>
            <p className="text-gray-600 text-sm">{explore.description}</p>
          </div>
          <div className="flex items-start">
            <h5 className="font-semibold text-slate-800 text-sm">Address:</h5>
            <p className="ml-1 text-sm">{explore.address}</p>
          </div>
          <div className="flex items-start">
            <h5 className="font-semibold text-slate-800 text-sm">Hour:</h5>
            <p className="ml-1 text-sm">{explore.hour}</p>
          </div>
          <div className="flex items-start">
            <h5 className="font-semibold text-slate-800 text-sm">Phone:</h5>
            <p className="ml-1 text-sm">{explore.phone}</p>
          </div>
          <div className="flex items-start">
            <h5 className="font-semibold text-slate-800 text-sm">Email:</h5>
            <p className="ml-1 text-sm">{explore.email}</p>
          </div>
          <div className="flex items-start">
            <h5 className="font-semibold text-slate-800 text-sm">Website:</h5>
            <p className="ml-1 text-sm">{explore.website}</p>
          </div>
        </div>
      </div>
      <Button className="bg-orange-500 px-16 max-w-fit self-center">
        View Profile
      </Button>
    </div>
  );
}
