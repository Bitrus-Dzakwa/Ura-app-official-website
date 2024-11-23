import HorizontalProgressBar from "@/components/ProgressBar";
import ReviewCard from "@/components/ReviewCard";
import TopNav from "@/components/shared/TopNav";
import { Button } from "@/components/ui/button";
import { getStarRepresentation } from "@/lib/getStarRating";
import { ReviewsData } from "@/lib/mockData";
import React from "react";

export default function page() {
  return (
    <main className="min-h-dvh">
      <TopNav title="Review" />
      <div className="flex flex-col items-center justify-center gap-3 p-5 bg-white">
        <h2 className="text-black text-3xl font-bold">4.0</h2>
        <div className="flex flex-col items-center space-y-3 font-medium text-sm">
          <span className="flex">{getStarRepresentation(4)}</span>
          <span className="text-lg font-medium font-primary">
            Based on 24 reviews
          </span>
        </div>
        <div className="flex gap-1 flex-col w-full pt-5">
          <div className="flex gap-5 justify-center items-center">
            <p className="text-xl">Excellent</p>
            <HorizontalProgressBar progress={80} />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <p className="text-xl">Good</p>
            <HorizontalProgressBar progress={60} />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <p className="text-xl">Average</p>
            <HorizontalProgressBar progress={50} />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <p className="text-xl text-nowrap">Below Average</p>
            <HorizontalProgressBar progress={50} />
          </div>
          <div className="flex gap-5 justify-center items-center">
            <p className="text-xl">Pass</p>
            <HorizontalProgressBar progress={10} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        {ReviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <div className="flex pt-0 p-5">
        <Button className="w-full h-8">Write a Review</Button>
      </div>
    </main>
  );
}
