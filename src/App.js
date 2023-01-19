import { useState } from "react";

import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CurrentTrades from "./components/Trades/CurrentTrades";
import HistoricalTrades from "./components/Trades/HistoricalTrades";
import { userIdList } from "./components/Users/UserListData";

import Filter from "./components/Filter/Filter";

import Order from "./components/Order/Order";
import priceData from "./assets/PriceChartData.json";
import Highcharts from "highcharts/highstock";
import OHLCVChart from "./components/Prices/OHLCV-Chart";

import "./App.css";

require("highcharts/indicators/indicators")(Highcharts);
require("highcharts/indicators/pivot-points")(Highcharts);
require("highcharts/indicators/macd")(Highcharts);
require("highcharts/modules/exporting")(Highcharts);
// require('highcharts/modules/map')(Highcharts)

const coins = [
  { label: "Adastra", value: "adastra" },
  { label: "AWS", value: "aws" },
  { label: "Glue", value: "glue" },
  { label: "PySpark", value: "pyspark" },
];

function App() {
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [tradeType, setTradeType] = useState(null);
  const [isMarket, setIsMarket] = useState(false);
  const [marketPrice, setMarketPrice] = useState(50);
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const user = userIdList[0];
  const volume = [];
  const groupingUnits = [
    [
      "week", // unit name
      [1], // allowed multiples
    ],
    ["month", [1, 2, 3, 4, 6]],
  ];

  const stockOptions = {
    rangeSelector: {
      selected: 1,
    },

    title: {
      text: `Historical Price for ${selectedCoin.label} Coin`,
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "OHLC",
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
        },
        title: {
          text: "Volume",
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2,
      },
    ],

    tooltip: {
      split: true,
    },
    series: [
      {
        type: "candlestick",
        name: selectedCoin.label,
        data: priceData[selectedCoin.label],
        dataGrouping: {
          units: groupingUnits,
        },
      },
      {
        type: "column",
        name: "Volume",
        data: volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits,
        },
      },
    ],
  };

  return (
    <Container fluid>
      <NavBar
        userId={user.uuid}
        userName={user.user_name}
        cashBalance={user.cash_balance}
        coinBalance={user.coin_balance}
      />
      <Tabs defaultActiveKey="current" id="trades-list-tab" className="mb-3">
        <Tab eventKey="current" title="Current Trades">
          <CurrentTrades />
        </Tab>
        <Tab eventKey="historical" title="Historical Trades">
          <HistoricalTrades />
        </Tab>
      </Tabs>
      <Filter
        selected={selectedCoin.label}
        onSelectedChange={setSelectedCoin}
        options={coins}
      />
      <Order
        tradeType={tradeType}
        onTradeTypeChange={setTradeType}
        qty={qty}
        onQtyChange={setQty}
        marketPrice={marketPrice}
        price={price}
        onPriceChange={setPrice}
        isMarket={isMarket}
        onCheckMarket={setIsMarket}
      />
      <OHLCVChart options={stockOptions} highcharts={Highcharts} />
    </Container>
  );
}

export default App;
