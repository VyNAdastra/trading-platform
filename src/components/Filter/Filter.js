import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Filter({ options, selected, onSelectedChange }) {
  const renderedOptions = options.map((option, key) => {
    return (
      <Dropdown.Item
        key={key}
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </Dropdown.Item>
    );
  });

  return (
    <div className="mb-3">
        <Row xs="auto" className="align-items-center">
          <Col><strong>Select a Coin</strong></Col>
          <Col>
            <DropdownButton
              id="select-coin"
              menuVariant="dark"
              title={`${selected}`}
              className="mt-2"
            >
              {renderedOptions}
            </DropdownButton>
          </Col>
        </Row>
    </div>
  );
}

export default Filter;
