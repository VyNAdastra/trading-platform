import { useRef } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Order = ({
  tradeType,
  onTradeTypeChange,
  qty,
  onQtyChange,
  marketPrice,
  price,
  onPriceChange,
  isMarket,
  onCheckMarket,
}) => {
  const checkboxRef = useRef(null);
  return (
    <div>
      <strong>Want to Trade?</strong>
      <ButtonGroup aria-label="Create new order" className="m-2">
        <Button
          variant={`${tradeType === "ask" ? "primary" : "outline-primary"}`}
          onClick={() => {
            onTradeTypeChange("ask");
          }}
        >
          Ask
        </Button>
        <Button
          variant={`${tradeType === "bid" ? "primary" : "outline-primary"}`}
          onClick={() => onTradeTypeChange("bid")}
        >
          Bid
        </Button>
      </ButtonGroup>
      {tradeType && (
        <div>
          <Row className="g-2 m-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Quantity">
                <Form.Control
                  type="number"
                  min={0}
                  placeholder="0"
                  value={qty}
                  onChange={(e) => onQtyChange(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <fieldset disabled={isMarket && true}>
                <FloatingLabel controlId="floatingInputGrid" label="Price">
                  <Form.Control
                    type="number"
                    min={0}
                    placeholder="0"
                    value={isMarket ? marketPrice : price}
                    onChange={(e) => onPriceChange(e.target.value)}
                  />
                </FloatingLabel>
              </fieldset>
              <Form.Group className="mt-2 mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Use market price"
                  onClick={() => onCheckMarket(!isMarket)}
                  ref={checkboxRef}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="mr-2" variant="primary" type="submit">
            Submit
          </Button>
          <Button
            className="m-2"
            variant="outline-secondary"
            onClick={() => {
              onTradeTypeChange(null);
              onCheckMarket(false);
              onPriceChange("");
              onQtyChange("");
              checkboxRef.current.checked = false;
            }}
          >
            Cancel
          </Button>{" "}
        </div>
      )}
    </div>
  );
};

export default Order;
