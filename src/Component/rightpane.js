import React from "react";
import "../styles.css";

export default class RightPane extends React.Component {
  render(props) {
    const experienceComp = this.props.experience.map((data) => {
      return (
        <div>
          <div className="subsection-header1 text-uppercase mr-2 d-inline-block">
            {data.Org} |
          </div>
          <div className="content d-inline-block text-uppercase">
            {data.Name}
          </div>
          <div>
            <div className="content d-inline-block mr-2">{data.Year} | </div>
            <div className="content d-inline-block">{data.Location}</div>
          </div>
          <div>
            {data.Projects.map((project) => {
              return (
                <div>
                  <div className="content d-inline-block">
                    <i class="fa fa-circle bullet mr-1"></i>
                    {project.Description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="grey section-header">EXPERIENCE</h1>
        <div>{experienceComp}</div>
      </div>
    );
  }
}
