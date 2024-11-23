import TopNav from "@/components/shared/TopNav";
import { profileData } from "@/lib/mockData";
import { Bookmark, Ellipsis, Forward, MessageSquare, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-dvh">
      <TopNav title="Profile" />
      <div className="flex flex-col justify-center items-center bg-orange-100 p-4 font-primary text-center">
        <div className="rounded-full w-12 h-12">
          <Image
            alt="profile-image"
            src=""
            className="w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <h1 className="font-semibold text-xl capitalize">{profileData.name}</h1>
        <p className="">{profileData.about}</p>
        <p className="">{profileData.openingHour}</p>
        <p className="">{profileData.phone}</p>
      </div>
      <div className="flex justify-between items-center gap-4 bg-slate-100 px-6 py-4 w-full">
        <div className="flex flex-col justify-center items-center gap-1">
          <MessageSquare />
          <p className="capitalize">Message</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Bookmark />
          <p className="capitalize">Save</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Star />
          <p className="capitalize">Reviews</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Forward />
          <p className="capitalize">Share</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <Ellipsis />
          <p className="capitalize">More</p>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2">
        {profileData.products.map((product, index) => (
          <Link
            key={index}
            className="flex flex-col gap-2"
            href={`/products/${product.id}`}
          >
            <h3 className="font-semibold text-xl capitalize">
              {product.title}
            </h3>
            <p>{product.description}</p>
            <p>NGN {product.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
