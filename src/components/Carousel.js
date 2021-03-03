import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

const Carousel = () => {
  return (
    <MDBContainer>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  );
};

export default Carousel;
