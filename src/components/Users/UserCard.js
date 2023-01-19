import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
const UserCard = ({ userId, userName, cashBalance, coinBalance }) => {
  return (
    <OverlayTrigger
      trigger="click"
      key="userid"
      placement="bottom"
      overlay={
        <Popover id="popover-positioned-bottom">
          <Popover.Header as="h3">{userName}</Popover.Header>
          <Popover.Body>
            <ul>
              <li>
                <strong>User ID:</strong> {userId}
              </li>
              <li>
                <strong>Cash: </strong>${cashBalance}
              </li>
              <li>
                <strong>Adastra Coin: </strong>
                {coinBalance["Adastra"]}
              </li>
              <li>
                <strong>AWS Coin: </strong>
                {coinBalance["AWS"]}
              </li>
              <li>
                <strong>Glue Coin: </strong>
                {coinBalance["Glue"]}
              </li>
              <li>
                <strong>PySpark Coin: </strong>
                {coinBalance["PySpark"]}
              </li>
            </ul>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="dark" className="m-4">
        {userName}
      </Button>
    </OverlayTrigger>
  );
};

export default UserCard;
