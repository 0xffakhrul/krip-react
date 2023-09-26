// import Navbar from "@/components/Navbar";
import grid from "../assets/grid.svg";
import Headline from "@/components/Headline";
import Showcase from "@/components/Showcase";
import CoinTable from "@/components/CoinList/CoinTable";

export default function Home() {
  return (
    <div>
      <main
        className="mx-auto max-w-7xl px-6 bg-[length:1200px_800px] bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <Headline />
        <Showcase />
        <CoinTable />
      </main>
    </div>
  );
}
