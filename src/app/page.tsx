import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import NavBarMobile from "@/components/NavBarMobile";

export default function Home() {
  return (
    <main className="flex flex-col h-full">
      <div className="lg:hidden w-full h-16">
        <NavBarMobile />
      </div>
      <div className="hidden lg:block w-full h-16">
        <NavBar />
      </div>
      <div className="flex h-[calc(100vh-4rem)] w-full bg-dark-01 overflow-hidden">
        <Hero />
      </div>
    </main>
  );
}
