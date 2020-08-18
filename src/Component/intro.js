import React from "react";
import "../styles.css";
import { NavLink } from "reactstrap";
export default class Intro extends React.Component {
  render(props) {
    const socialComp = this.props.social.map((data) => {
      return (
        <NavLink className="d-inline-block" href={data.url}>
          <i className={`mr-3 fa fa-${data.name}`}></i>
        </NavLink>
      );
    });

    return (
      <div className="intro text-center m-auto">
        <div className="name text-center m-auto">
          <span className="firstname">{this.props.firstname} </span>
          <span className="lastname">{this.props.lastname}</span>
        </div>
        <div className="mt-0">{socialComp}</div>
        <div className="mt-0">
          <span>
            <i className="fa fa-envelope mr-3"> nehaambasta08@gmail.com </i>
          </span>
          <span>
            <i className="fa fa-phone"></i>
          </span>
        </div>
      </div>
    );
  }
}
