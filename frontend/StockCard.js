import styled from "styled-components";

const Card = styled.div`
  background: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  margin: 10px;
  text-align: center;
  color: white;
  width: 250px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${({ change }) => (change >= 0 ? "#1db954" : "#ff4d4d")};
`;

export default function StockCard({ symbol, price, change }) {
  return (
    <Card>
      <h3>{symbol}</h3>
      <Price change={change}>${price}</Price>
      <p>Change: {change}%</p>
    </Card>
  );
}
