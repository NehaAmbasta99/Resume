import React from "react";
import "../styles.css";
import { Container, Row } from "reactstrap";
export default class Section extends React.Component {
  constructor() {
    super();
    this.state ={};
  }
  render() {
    return (
      <Container>
        <Row className="section-header"></Row>
        <Row className="subsection-header"></Row>
        <Row className="content"></Row>
      </Container>
    );
  }
}
