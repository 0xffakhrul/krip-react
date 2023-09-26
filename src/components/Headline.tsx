import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

export default function Headline() {
  return (
    <div className="container">
      <motion.div
        className="flex flex-col gap-6 text-center py-28 text-transparent from-zinc-400 via-zinc-200 to-zinc-400 bg-gradient-to-r bg-clip-text"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        <h1 className="sm:text-6xl text-5xl font-bold md:text-7xl">
          <Balancer>Navigating the Crypto Waves, Together!</Balancer>
        </h1>
        <p className="font-semibold text-xl">Crypto Insights at Your Fingertips.</p>
      </motion.div>
    </div>
  );
}
