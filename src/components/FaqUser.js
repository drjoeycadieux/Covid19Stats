import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBContainer
} from "mdbreact";

const PanelPage = () => {
  return (
    <MDBContainer>
      <MDBRow className="mb-4">
        <MDBCol sm="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Responding to COVID-19</MDBCardTitle>
              <MDBCardText>
                In the face of this unprecedented pandemic, Gavi is working with
                countries to support COVID-19 response and to maintain and
                restore routine immunisation. The Alliance is also co-leading
                global efforts on equitable access to COVID-19 vaccines.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle> technical assistant </MDBCardTitle>
              <MDBCardText>
                Contact Us if technical assistant needed. IT technical support
                officers monitor and maintain the computer systems and networks
                of an organisation. You will be installing and configuring
                computer systems, diagnosing hardware and software faults and
                solving technical and applications problems.
              </MDBCardText>
              <MDBBtn color="primary">go somewhere</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default PanelPage;
