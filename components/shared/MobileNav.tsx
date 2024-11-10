"use client";

import { MobileNavIcon } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathName = usePathname();

  return (
    <nav className="right-0 bottom-0 left-0 z-50 sticky flex justify-between items-center gap-5 md:hidden bg-white shadow-2xl px-5 py-3 border-t w-full text-slate-800">
      {MobileNavIcon.map((nav) => (
        <Link href={nav.href} key={nav.id}>
          <nav.icon
            className={cn(
              "h-6 w-6",
              pathName === nav.href && "text-orange-500 stroke-4"
            )}
          />
        </Link>
      ))}
    </nav>
  );
}
