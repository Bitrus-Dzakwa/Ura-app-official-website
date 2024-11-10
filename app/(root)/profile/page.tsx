import TopNav from "@/components/shared/TopNav";
import Image from "next/image";

export default function page() {
  return (
    <main className="min-h-dvh">
      <TopNav title="Profile" />
      <div className="flex bg-orange-100 p-4">
        <div className="rounded-full w-12 h-12">
          <Image
            alt="profile-image"
            src=""
            className="w-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <h1 className="text-xl">Elegance by enoila</h1>
      </div>
    </main>
  );
}
