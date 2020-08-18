import React from "react";
import "../styles.css";

export default class LeftPane extends React.Component {
  render(props) {
    const educationComp = this.props.education.map((data) => {
      return (
        <div className="mb-1">
          <div className="subsection-header1 text-uppercase">{data.Org} </div>
          <div className="content d-inline-block mr-2">{data.Name} | </div>
          <div className="content d-inline-block">{data.Location}</div>
          <div className="content">{data.Year}</div>
          <div className="content">{data.Marks}</div>
        </div>
      );
    });

    const volunteerExpComp = this.props.volunteerExperience.map((data) => {
      return (
        <div className="mb-1">
          <div className="subsection-header1 text-uppercase mr-2 d-inline-block">
            {data.Org} |
          </div>
          <div className="subsection-header1 d-inline-block">{data.Year} </div>
          <div>
            <div className="content d-inline-block mr-2">{data.Reward} |</div>
            <div className="content d-inline-block">{data.Topic}</div>
          </div>
        </div>
      );
    });
    const progSkillsProfecientWithComp = this.props.progSkillsProfecientWith.map(
      (data) => {
        return <span>{data}, </span>;
      }
    );

    const progSkillsFamiliarWithComp = this.props.progSkillsFamiliarWith.map(
      (data) => {
        return <span>{data}, </span>;
      }
    );

    return (
      <div>
        <span className="section-header grey">EDUCATION</span>
        <div class="mb-3">{educationComp}</div>
        <span className="section-header grey">VOLUNTEER EXPERIENCE</span>
        <div class="mb-3">{volunteerExpComp}</div>
        <span className="section-header grey">SKILLS</span>
        <div>
          <span className="subsection-header1">PROGRAMMING SKILLS</span>
        </div>
        <div className="mb-1">
          <div className="subsection-header2">Profecient With: </div>
          {progSkillsProfecientWithComp}
        </div>
        <div className="mb-1">
          <div className="subsection-header2">Familiar With: </div>
          {progSkillsFamiliarWithComp}
        </div>
      </div>
    );
  }
}
