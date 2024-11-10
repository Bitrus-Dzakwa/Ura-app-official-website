"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  search: {
    id: number;
    image: string;
    title: string;
    description: string;
    address: string;
    hour: string;
    phone: string;
  };
}

export default function SearchCard({
  search: { image, title, description, address, hour, phone, id },
}: Props) {
  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-1 bg-white shadow-md p-3 rounded-lg w-full overflow-hidden"
      onClick={() => {
        router.push(`/products/${id}`);
      }}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
        width={500}
        height={500}
      />
      <h2 className="font-bold font-primary text-lg">{title}</h2>
      <p className="text-gray-600 text-sm truncate">{description}</p>
      <div className="flex items-start">
        <h5 className="font-semibold text-slate-800 text-sm">
          Address: <span className="ml-1 font-light text-sm">{address}</span>
        </h5>
      </div>
      <div className="flex items-start">
        <h5 className="font-semibold text-slate-800 text-sm">
          Hour: <span className="ml-1 font-light text-sm">{hour}</span>
        </h5>
      </div>
      <div className="flex items-start">
        <h5 className="font-semibold text-slate-800 text-sm">
          Phone: <span className="ml-1 font-light text-sm">{phone}</span>
        </h5>
      </div>
    </div>
  );
}
