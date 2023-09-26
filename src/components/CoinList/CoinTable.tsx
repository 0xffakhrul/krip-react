import { useEffect, useState } from "react";
import { Coin, columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";
import { motion } from "framer-motion";
import { fromBottomFast } from "@/lib/animation";

function CoinTable() {
  const [data, setData] = useState<Coin[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get<Coin[]>(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false"
        );
        const slicedData = res.data.slice(0, 20);
        setData(slicedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // The empty array [] ensures this effect runs once after initial render

  return (
    <div className="container px-0">
      <motion.h1
        className="text-white font-bold text-4xl text-center py-12"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        Market Update
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <DataTable columns={columns} data={data} />
      </motion.div>
    </div>
  );
}

export default CoinTable;
