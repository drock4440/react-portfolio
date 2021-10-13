import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';


function PortfolioCard(props) {
    return (
        <div className="card port-card">
            <div className="img-container">

                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Project:</strong> {props.project}
                    </li>
                    <li>
                        <a>Demo: {props.location}</a>
                    </li>

                </ul>
            </div>

        </div>
    );
}

export default PortfolioCard;
// import React from 'react';


// function PortfolioCard(props) {
//   return (
//     <MDBRow>
//       <MDBCol style={{ maxWidth: "40rem" }}>
//         <MDBCard reverse>
//           <MDBCardImage cascade style={{ height: '20rem' }} src={props.image}/>
//           <MDBCardBody cascade className="text-center">
//             <MDBCardTitle>{props.name}</MDBCardTitle>
//             <h5 className="indigo-text"><strong>Photography</strong></h5>
//             <MDBCardText> 
//                 <ul>
//                     <li>
//                         <strong>Project:</strong> {props.project}
//                     </li>
//                     <li>
//                         <a>Demo: {props.location}</a>
//                     </li>
//                 </ul>
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   )
// }

// export default PortfolioCard;