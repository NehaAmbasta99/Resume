import React from "react";
import "./styles.css";
import Intro from "./Component/intro";
import Leftpane from "./Component/leftpane";
import Rightpane from "./Component/rightpane";
import { Container, Row, Col } from "reactstrap";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "Neha",
      lastName: "Ambasta",
      social: [
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/neha-ambasta-236636110/"
        },
        { name: "behance", url: "https://www.behance.net/ambastaneha" },
        { name: "wordpress", url: "https://iamambasta.wordpress.com/" },
        { name: "dribbble", url: "https://dribbble.com/AmbastaNeha" },
        { name: "github", url: "https://github.com/NehaAmbasta99" }
      ],
      education: [
        {
          Org: "Gandhi Engineering College, BPUT",
          Year: "2012-2016",
          Marks: "8.57/10",
          Location: "Odisha",
          Name: "B.Tech in Computer Science"
        },
        {
          Org: "Delhi Public School",
          Year: "2010-2012",
          Marks: "79.2%",
          Location: "Ranchi",
          Name: "Higher Secondary"
        },
        {
          Org: "GBPS",
          Year: "2010",
          Marks: "9.6/10",
          Location: "Nawada",
          Name: "Secodary"
        }
      ],
      experience: [
        {
          Org: "Koch Technology Center",
          Year: "Jan 2019 - Present",
          Projects: [
            {
              Name: "Cordura",
              Description:
                "Worked on UI using angular, was involved in Sitecore Upgrade, did frontend web designing, crazy egg integration and analysis, Mill Locator pages, was involved in redesigning several sections of website."
            },
            {
              Name: "Stainmaster",
              Description:
                "Worked on Google maps integration, SEO, Store Locator pages, Vulnerability issues and on blog pages."
            },
            {
              Name: "Antron and IPT",
              Description: "Worked on product listing and blog pages."
            }
          ],
          Location: "Bengaluru",
          Name: "Fullstack Developer"
        },
        {
          Org: "Gloify",
          Year: "July 2018 - Dec 2018",
          Projects: [
            {
              Name: "Arrivae",
              Description:
                "Worked as a Frontend Developer on Angular 6. Created dynamic components, P.O pages, Materials management pages and also worked on SEO. The backend was on Ruby on Rails. Used to handle the deployment also." +
                "P.O maintainance, Quotes management, Slots management of the events and venue are also done through this application. Customer can call or contact through mail in case of any discussion they want. When both the sales person and the customer agree upon a quote, the purchase order is released. The application also tracks the payment made." +
                "The dashboard provides the graphs, bookings on calendar and other reports automatically generated"
            }
          ],
          Location: "Bengaluru",
          Name: "Senior Frontend Developer"
        },
        {
          Org: "Mindfire Solutions",
          Year: "Jun 2016 - July 2018",
          Projects: [
            {
              Name: "Crown Cabs",
              Description:
                "Worked on the driver portal, electronic vouchering, customer survey, and notification systems to reduce drivers’ workload, improve customer experience, and optimize available resources. New website setup using Rackspace, Godaddy, backend, Database Designing and frontend."
            },
            {
              Name: "EventPlanner",
              Description:
                "This app is used for man managing events, like birthday, anniversary, wedding, gala, conference, corporate event, etc. Food Items selection, calendar updation and management, guest management. Based on the food, ceremony, number of guests, date of the event, venue of the event, the pricing suggestion/ quote is also created by the application, so that customer can choose the best options among that. I worked on this form and dashboard UI and Web API."
            },
            {
              Name: "Training Tracker",
              Description:
                "It is an internal project of Mindfire Solutions, which is used for the training and tracking the performance of the freshers." +
                "I created a REST API using for updating the details of employees from Mindfire Employees DB to Training tracker DB." +
                "The security of the API was taking into consideration." +
                "I also worked on the UI of the Training Tracker application."
            },
            {
              Name: "Genelex",
              Description:
                "Genetic Testing and Molecular Diagonastics application. Report generation for lab is the heart of the project. Data entry of patients through upload excel sheets, review process done by the assigned phamasist and report generation in CSV and PDF are the three phases of the whole" +
                "process. Modular directives were created for faster development."
            }
          ],
          Location: "Bhubaneswar",
          Name: "Fullstack Developer"
        }
      ],
      volunteerExperience: [
        {
          Org: "Google Developers Group",
          Year: "2020",
          Topic: "UI/UX with Adobe XD",
          Reward: "Speaker"
        }
      ],
      progSkillsProfecientWith: [
        "Angular",
        "Angularjs",
        "jQuery",
        "JavaScript",
        "C#",
        "ASP.Net",
        "WebAPI",
        "Design Patterns",
        "HTML,Entity Framework",
        "CSS",
        "Bootstrap"
      ],
      progSkillsFamiliarWith: [
        "React Native",
        "React",
        "SQL",
        "Ionic",
        "KendoUI",
        "Knockoutjs",
        "My SQL",
        "Sitecore",
        "SEO Analysis",
        "PWA",
        "AWS",
        "Docker",
        "Crazy Egg",
        "Swagger",
        "Wordpress",
        "Java",
        "Azure"
      ],
      tools: [
        "GitLab",
        "BitBucket",
        "GitHub",
        "Service Now",
        "Trello",
        "Assembla"
      ],
      webDesigningSkills: [
        "AdobeXD",
        "UX",
        "UI",
        "Journey Map",
        "Empathy Map",
        "Usability Testing",
        "User Research"
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Intro
          firstname={this.state.firstName}
          lastname={this.state.lastName}
          social={this.state.social}
        />
        <Container>
          <Row>
            <Col xs="4">
              <Leftpane
                progSkillsProfecientWith={this.state.progSkillsProfecientWith}
                progSkillsFamiliarWith={this.state.progSkillsFamiliarWith}
                volunteerExperience={this.state.volunteerExperience}
                education={this.state.education}
              />
            </Col>
            <Col xs="8">
              <Rightpane experience={this.state.experience} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
