import UserCard from "./Users/UserCard";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../assets/og-default.png";
const NavBar = ({ userId, userName, cashBalance, coinBalance }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Adastrahood
          </Navbar.Brand>
          <UserCard
            userId={userId}
            userName={userName}
            cashBalance={cashBalance}
            coinBalance={coinBalance}
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
