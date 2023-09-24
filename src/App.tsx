import Navbar from "./components/Navbar";
import grid from "./assets/grid.svg";
import Headline from "./components/Headline";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="relative flex flex-col pb-40 text-zinc-200 bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg-[length:1200px_800px] from-zinc-400/10 to-60% to-transparent bg-top bg-no-repeat selection:bg-zinc-500/20 antialiased">
      <Navbar />
      <main
        className="mx-auto min-h-screen bg-[length:1200px_800px] bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${grid})` }}
      >
        <Headline />
        <Showcase />
      </main>
    </div>
  );
}

export default App;
