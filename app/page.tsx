import PhotoCard from "@/components/PhotoCard";
import MobileNav from "@/components/shared/MobileNav";
import TopNav from "@/components/shared/TopNav";
import { Button } from "@/components/ui/button";
import { productInHomePage } from "@/lib/mockData";
import { EllipsisVertical } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <main className="relative bg-gray-50 dark:bg-gray-800 min-h-dvh">
      <TopNav />
      <div className="flex flex-col gap-4 p-4 w-full">
        {productInHomePage.map((product) => {
          return (
            <div key={product.id} className="space-y-3">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <Image
                    src={product.businessImage}
                    alt={product.businessName}
                    className="h-16 w-16 object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="flex flex-col gap-2">
                    <h4 className="leading-none">{product.businessName}</h4>
                    <p className="">{product.createdAt}</p>
                  </div>
                </div>
                <EllipsisVertical />
              </div>
              <div className="flex flex-col gap-1">
                <p className="leading-none">New collection alert</p>
                <p className="leading-none">we await your patronage.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {product.products.map((prod) => (
                  <PhotoCard
                    key={prod.id}
                    price={prod.price}
                    id={prod.id}
                    src={prod.image}
                    title={prod.name}
                  />
                ))}
              </div>
              <Button className="w-full bg-orange-500">View Profile</Button>
            </div>
          );
        })}
      </div>
      <MobileNav />
    </main>
  );
}
