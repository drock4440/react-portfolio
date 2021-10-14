import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-2 mt-2">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="8">
            <h5 className="fTitle">Thank you for stopping by!</h5>
            <p>
              Here is another direct link to my repositories on Github!
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="fTitle">Click Here!</h5>
            <ul>
              <li className="list-unstyled text-uppercase">
                <a href="https://github.com/drock4440">GitHub</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-right py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;