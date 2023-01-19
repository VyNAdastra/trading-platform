import TradesList from "./TradesList";
import { TradeListData as trades } from "./TradeListData";

function CurrentTrades() {
  const currentTrades = trades.filter((trade) => trade.status === "open");

  return (
    <div>
      <TradesList trades={currentTrades} />
    </div>
  );
}

export default CurrentTrades;
