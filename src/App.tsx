import Navbar from "./components/Navbar";
import Coin from "./pages/Coin";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative flex flex-col pb-40 text-zinc-200 bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] bg-[length:1200px_800px] from-zinc-400/10 to-60% to-transparent bg-top bg-no-repeat selection:bg-zinc-500/20 antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
