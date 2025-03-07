// import { useState } from "react";
// import StockCard from "../components/StockCard";
// import PortfolioCard from "../components/PortfolioCard";

// export default function Dashboard() {
//   const stocks = [
//     { symbol: "reliance", price: 185, change: 2.5 },
//     { symbol: "bajaj finance", price: 210, change: -1.8 },
//   ];

//   const portfolio = [
//     { symbol: "reliance", quantity: 10, totalValue: 1850, profitLoss: 50 },
//     { symbol: "bajaj finance", quantity: 5, totalValue: 1050, profitLoss: -20 },
//   ];

//   return (
//     <div className="container">
//       <h1>Stock Dashboard</h1>
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
//         {stocks.map((stock) => (
//           <StockCard key={stock.symbol} {...stock} />
//         ))}
//       </div>

//       <h2>My Portfolio</h2>
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
//         {portfolio.map((item) => (
//           <PortfolioCard key={item.symbol} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

export default function StockDashboard() {
  const [stocks, setStocks] = useState([
    { symbol: "Reliance", price: 185, change: 2.5 },
    { symbol: "Bajaj Finance", price: 210, change: -1.8 },
  ]);

  const [portfolio, setPortfolio] = useState([
    { symbol: "Reliance", quantity: 10, totalValue: 1850, profitLoss: 50 },
    { symbol: "Bajaj Finance", quantity: 5, totalValue: 1050, profitLoss: -20 },
  ]);

  // Function to update stock prices randomly
  const updateStocks = () => {
    setStocks((prevStocks) =>
      prevStocks.map((stock) => {
        const randomChange = (Math.random() * 4 - 2).toFixed(2); // Random change between -2 and +2
        const newPrice = Math.max(1, stock.price + parseFloat(randomChange)); // Ensure price doesn't go negative
        return { ...stock, price: newPrice, change: parseFloat(randomChange) };
      })
    );
  };

  // Function to update portfolio values based on new stock prices
  const updatePortfolio = () => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.map((holding) => {
        const stock = stocks.find((s) => s.symbol === holding.symbol);
        if (stock) {
          const newTotalValue = (holding.quantity * stock.price).toFixed(2);
          const profitLoss = (newTotalValue - holding.totalValue).toFixed(2);
          return { ...holding, totalValue: parseFloat(newTotalValue), profitLoss: parseFloat(profitLoss) };
        }
        return holding;
      })
    );
  };

  // Run every 3 seconds to simulate real-time stock price changes
  useEffect(() => {
    const interval = setInterval(() => {
      updateStocks();
      updatePortfolio();
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [stocks]); // Re-run when stocks change

  return (
    <div>
      <h2>Live Stock Prices</h2>
      {stocks.map((stock, index) => (
        <div key={index}>
          <p>
            {stock.symbol}: ₹{stock.price} (<span style={{ color: stock.change >= 0 ? "green" : "red" }}>
              {stock.change >= 0 ? "+" : ""}{stock.change}%
            </span>)
          </p>
        </div>
      ))}

      <h2>Your Portfolio</h2>
      {portfolio.map((holding, index) => (
        <div key={index}>
          <p>
            {holding.symbol} - {holding.quantity} shares | Total: ₹{holding.totalValue} | 
            <span style={{ color: holding.profitLoss >= 0 ? "green" : "red" }}>
              {holding.profitLoss >= 0 ? " +" : " "}{holding.profitLoss}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

