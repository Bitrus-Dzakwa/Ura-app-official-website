"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface Props {
  title?: string;
}

export default function TopNav({ title }: Props) {
  const pathname = usePathname();

  if (pathname === "/search") {
    return <div>Search page</div>;
  }

  return (
    <nav className="top-0 sticky flex justify-between items-center bg-orange-500 p-5 text-white">
      <ChevronLeft size={28} className="text-white" />
      <h1 className="font-display text-xl capitalize">{title}</h1>
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className={cn("text-white fill-white")} />
          </SheetTrigger>
          <SheetContent className="z-[1000] flex flex-col gap-16">
            <div className="hidden">
              <SheetHeader>
                <SheetTitle>Side Bar</SheetTitle>
              </SheetHeader>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="font-medium text-opexa-deepblue text-xl hover:text-opexa-deepblue/85transition-all duration-300"
              >
                Contact us
              </Link>
            </div>
            {
              <div className="flex flex-col gap-4 w-full">
                <Link href={"/auth/login"} className="w-full">
                  <Button variant="default" className="w-full">
                    Login
                  </Button>
                </Link>

                <Link href="/auth/register" className="w-full">
                  <Button variant="secondary" className="w-full">
                    Get started
                  </Button>
                </Link>
              </div>
            }
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
