import PhotoCard from "@/components/PhotoCard";
import TopNav from "@/components/shared/TopNav";
import Image from "next/image";

export const photoDatas = [
  {
    id: 1,
    src: "/assets/Rectangle 265.svg",
    title: "Purple throw Pillow",
    price: 5000,
  },
  {
    id: 2,
    src: "/assets/Rectangle 264.svg",
    title: "Creamy red throw Pillow",
    price: 4500,
  },
  {
    id: 3,
    src: "/assets/Rectangle 263.svg",
    title: "Dark blue throw Pillow",
    price: 4000,
  },
  {
    id: 4,
    src: "/assets/Rectangle 262.svg",
    title: "Light blue throw Pillow",
    price: 3500,
  },
  {
    id: 5,
    src: "/assets/Rectangle 261.svg",
    title: "Light gray throw Pillow",
    price: 3000,
  },
];

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
            <PhotoCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
