import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

function TradesList({ trades }) {
  const renderedTradesList = trades.map((trade, key) => {
    return (
      <tr key={key}>
        <td>{trade.type}</td>
        <td>{trade.coin}</td>
        <td>${trade.price}</td>
        <td>{trade.amount}</td>
        <td>{trade.filled}</td>
        <td>{trade.timestamp}</td>
        <td>{trade.status}</td>
        <td>{trade.trade_id}</td>
        {trade.status === "open" && (
          <td className="text-center">
            <Button variant="danger">Cancel</Button>
          </td>
        )}
      </tr>
    );
  });

  return (
    <div>
      <Table striped bordered hover size="sm" className="text-center">
        <thead>
          <tr>
            <th>Type</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Filled</th>
            <th>Time</th>
            <th>Status</th>
            <th>Trade ID</th>
            {trades[0].status === "open" && (
            <th>Action</th>)}
          </tr>
        </thead>
        <tbody>{renderedTradesList}</tbody>
      </Table>
    </div>
  );
}

export default TradesList;
