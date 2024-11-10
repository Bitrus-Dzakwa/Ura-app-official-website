import MobileNav from "@/components/shared/MobileNav";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <main className="relative min-h-dvh">
      {children}
      <MobileNav />
    </main>
  );
}
