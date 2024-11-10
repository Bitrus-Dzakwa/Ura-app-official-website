import TopNav from "@/components/shared/TopNav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/fnLib";
import { ExploreMarketData } from "@/lib/mockData";
import { Dot, Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function page({ params }: { params: { productId: string } }) {
  const { productId } = params;

  const id = Number(productId);

  const product = ExploreMarketData.filter((item) => item.id === id)[0];

  const getStarRepresentation = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`full-${i}`} className="text-amber-400 fill-amber-400" />
      ); // Full star
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="text-amber-400 fill-amber-400" />
      ); // Half star
    }

    // Add empty stars to make it 5 stars total
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="text-amber-400 fill-none" />
      ); // Empty star
    }

    return stars; // Return an array of star JSX elements
  };

  return (
    <div className="min-h-dvh">
      <TopNav />
      <div className="flex flex-col gap-3 p-5 w-full">
        <Image
          src={product.image}
          alt={product.title}
          className="rounded-lg w-full h-40 object-cover"
          width={500}
          height={500}
        />
        <h2 className="font-bold font-primary text-2xl leading-none">
          {product.title}
          {product.availability && <Dot className="fill-green-500" size={18} />}
        </h2>
        <h2 className="-mt-1 font-bold font-primary text-xl leading-none">
          NGN {formatPrice(product.price)}
        </h2>
        <div className="flex items-center gap-2 font-medium text-sm">
          <span className="flex">{getStarRepresentation(product.reviews)}</span>
          <span>{product.reviews} ratings</span>
        </div>
        {product.availability && <span>still available</span>}
        <Separator />
        <p className="font-medium text-gray-600 text-lg">
          {product.description}
        </p>
        <Button>Send Message</Button>
        <Separator />
        <div className="flex gap-2">
          <p className="">Business Information</p>
        </div>
      </div>
    </div>
  );
}