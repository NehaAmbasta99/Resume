import React from "react";
import "../styles.css";
import { Nav, Container, NavItem, NavLink, Row } from "reactstrap";
export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <div>
            <span>NEHA</span> <span>AMBASTA</span>
            <Container>
              <Row>
                <Nav>
                  <NavItem>
                    <NavLink href="#">Blog</NavLink>
                    <NavLink href="#">LinkedIn</NavLink>
                    <NavLink href="#">Behance</NavLink>
                    <NavLink href="#">GitHub</NavLink>
                    <NavLink href="#">Leet Code</NavLink>
                  </NavItem>
                </Nav>
              </Row>
            </Container>
          </div>
        </Row>
      </Container>
    );
  }
}
