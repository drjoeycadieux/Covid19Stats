import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">C19T Manage</h5>
            <p>
              Covid-19 Tracker Canada are providing information about the
              situation with th covid-19.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Menu</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">StackOverflow</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">License</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Media</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.joeycadieux.com"> Developed By Joey Cadieux </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
