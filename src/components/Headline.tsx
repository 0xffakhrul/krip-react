import Balancer from "react-wrap-balancer";

export default function Headline() {
  return (
    <div className="container">
      <div className="flex flex-col gap-6 text-center py-28 text-transparent from-zinc-400 via-zinc-200 to-zinc-400 bg-gradient-to-r bg-clip-text">
        <h1 className="sm:text-6xl text-5xl font-bold md:text-7xl">
          <Balancer>Navigating the Crypto Waves, Together!</Balancer>
        </h1>
        <p className="font-semibold text-xl">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}
