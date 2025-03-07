import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const token = localStorage.getItem("token");
      const res = await getPortfolio(token);
      setPortfolio(res.data);
    };

    fetchPortfolio();
  }, []);

  return (
    <div>
      <h1>My Portfolio</h1>
      <ul>
        {portfolio.map((stock, index) => (
          <li key={index}>
            {stock.symbol}: {stock.quantity} shares
          </li>
        ))}
      </ul>
    </div>
  );
}
