import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export function ProductPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#24160b]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pb-20 pt-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="aspect-[4/5] animate-pulse rounded-[32px] bg-[#f6ead0]" />
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="aspect-square animate-pulse rounded-2xl bg-[#f6ead0]" />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="h-4 w-40 animate-pulse rounded-full bg-[#f6ead0]" />
            <div className="h-12 w-72 animate-pulse rounded-full bg-[#f6ead0]" />
            <div className="h-8 w-36 animate-pulse rounded-full bg-[#f6ead0]" />
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-6 animate-pulse rounded-full bg-[#f6ead0]" />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="h-24 animate-pulse rounded-[24px] bg-[#f6ead0]" />
              ))}
            </div>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-14 animate-pulse rounded-2xl bg-[#f6ead0]" />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
