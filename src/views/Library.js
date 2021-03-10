import React from "react";
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";

const Library = () => {
  return (
    <MDBContainer>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem active>Home</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Library</MDBBreadcrumbItem>
      </MDBBreadcrumb>

      <MDBBreadcrumb>
        <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
        <MDBBreadcrumbItem>Library</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>Data</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  );
};

export default Library;
