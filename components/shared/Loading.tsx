"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-dvh bg-orange-600/60">
      <div className="flex justify-center items-center h-full">
        <Image
          src="/assets/logo.svg"
          alt="loading logo"
          className="h-32"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
