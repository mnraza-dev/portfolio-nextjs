import HeroSection from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10  px-5 ">
      <div className="max-w-7xl w-full ">
        <h1 className="p-6 text-6xl font-bold underline">Hello, Next.js</h1>

        <HeroSection />
      </div>

      <button>Hello</button>
    </main>
  );
}
