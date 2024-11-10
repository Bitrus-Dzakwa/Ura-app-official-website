import MobileNav from "@/components/shared/MobileNav";

interface Props {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <main className="relative bg-slate-50 dark:bg-slate-900 min-h-dvh">
      {children}
      <MobileNav />
    </main>
  );
}
