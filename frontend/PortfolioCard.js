import styled from "styled-components";

const Card = styled.div`
  background: #242424;
  padding: 20px;
  border-radius: 12px;
  margin: 10px;
  text-align: center;
  color: white;
  width: 300px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ProfitLoss = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${({ profit }) => (profit >= 0 ? "#1db954" : "#ff4d4d")};
`;

export default function PortfolioCard({ symbol, quantity, totalValue, profitLoss }) {
  return (
    <Card>
      <h3>{symbol} ({quantity} Shares)</h3>
      <p>Total Value: ${totalValue}</p>
      <ProfitLoss profit={profitLoss}>P/L: {profitLoss >= 0 ? `+${profitLoss}` : profitLoss}</ProfitLoss>
    </Card>
  );
}
