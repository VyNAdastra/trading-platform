import TradesList from "./TradesList";
import { TradeListData as trades } from "./TradeListData";

function HistoricalTrades() {
  const historicalTrades = trades.filter(
    (trade) => trade.status === "close" || trade.status === "cancel"
  );
  return (
    <div>
      <TradesList trades={historicalTrades} />
    </div>
  );
}

export default HistoricalTrades;
