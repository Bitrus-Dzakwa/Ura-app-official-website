import PhotoCard from "@/components/PhotoCard";
import TopNav from "@/components/shared/TopNav";
import { photoDatas } from "@/lib/mockData";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-dvh">
      <TopNav title="Photos" />
      <div className="flex flex-col p-5 gap-4">
        <div className="flex gap-3 items-center">
          <Image
            src="/assets/photo.svg"
            alt="photo-page image"
            className="h-24 w-24 rounded-full object-cover"
            height={500}
            width={500}
          />
          <h4 className="uppercase text-xl font-semibold font-primary">
            supag collections
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {photoDatas.map((data) => (
            <PhotoCard
              key={data.id}
              id={data.id}
              price={data.price}
              src={data.src}
              title={data.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
