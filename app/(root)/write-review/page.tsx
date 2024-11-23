"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Upload } from "lucide-react";
import TopNav from "@/components/shared/TopNav";
import { Button } from "@/components/ui/button";

// Define the validation schema using Zod
const formSchema = z.object({
  review: z.string().min(3, "Review must be at least 10 characters"),
  photo: z.instanceof(File).optional(),
});

type FormData = {
  review: string;
  photo: File | null;
};

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("review", data.review);
    if (data.photo) {
      formData.append("photo", data.photo);
    }

    try {
      // Example API call
      const response = await fetch("/api/submit-review", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-dvh">
      <TopNav title="Write a Review" />
      <div className="flex flex-col space-y-4 px-4">
        <div className="flex flex-col items-center justify-center py-8 px-5 bg-white shadow">
          <h2 className="text-lg text-center text-orange-500">
            Feel free to share your experience with us
          </h2>
          <p className="text-foreground">We would love to serve you better</p>
        </div>
        <p className="text-xl leading-none">Add Photos or Video</p>
        <div className="w-full bg-white flex flex-col gap-3 py-12 shadow">
          <Controller
            control={control}
            name="photo"
            render={({ field }) => (
              <label className="flex flex-col items-center cursor-pointer">
                <Upload className="h-10 w-10 text-gray-500" />
                <p className="text-black text-lg font-semibold">
                  Click here to upload
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      field.onChange(e.target.files[0]);
                    }
                  }}
                  className="hidden"
                  aria-label="Upload photo"
                />
              </label>
            )}
          />
          {errors.photo && (
            <p className="text-red-500">{errors.photo.message}</p>
          )}
        </div>

        <p className="text-xl leading-none">Write your Review</p>
        <div className="w-full bg-white flex flex-col gap-3 shadow border rounded-lg">
          <Controller
            control={control}
            name="review"
            render={({ field }) => (
              <textarea
                {...field}
                rows={10}
                className="w-full p-2"
                placeholder="Write your review here..."
              />
            )}
          />
          {errors.review && (
            <p className="text-red-500">{errors.review.message}</p>
          )}
        </div>

        <Button
          onClick={handleSubmit(onSubmit)}
          className="bg-orange-500 w-full"
          disabled={loading}
        >
          {loading && <Loader2 className="animate-spin" />}{" "}
          {loading ? "Submitting..." : "Submit Review"}
        </Button>

        {success && (
          <p className="text-green-500 mt-2">Review submitted successfully!</p>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </main>
  );
}
