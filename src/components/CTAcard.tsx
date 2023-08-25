import Image from "next/image";

const CTAcard = () => {
  return (
    <div className="relative overflow-hidden bg-slate-400 py-8 px-4 rounded-md">
      <Image
        alt="CTA-image"
        fill
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/50" />
      <div className="relative z-20">
        <h2 className="font-medium mb-2">#ExploreTheWorld</h2>
        <div className="text-3xl mb-4 font-semibold">
          Explore The World With Me
        </div>
        <p className="text-lg max-w-lg">
          Explore the world with me, i have travelled around the world 🌏 and i
          wish to visit 🕋 on day and i hope this day is very soon
        </p>
        <form className=" mt-6 flex items-center gap-4 w-full">
          <input
            type="text"
            className="bg-white/90 w-full md:w-auto p-2 outline-none rounded-md focus:ring-2 ring-neutral-600"
            placeholder="Write Your Email"
          />
          <button className="rounded-md whitespace-nowrap px-4 py-2 bg-neutral-900 text-neutral-300">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTAcard;
