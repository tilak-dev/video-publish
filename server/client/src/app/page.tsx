import HomeAsideLayout from "@/components/HomeAsideLayout";
import HomeCard from "@/components/HomeCard";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="h-screen overflow-y-auto bg-[#121212] text-white">
       
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
          <HomeAsideLayout/>
          <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
              <HomeCard />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
