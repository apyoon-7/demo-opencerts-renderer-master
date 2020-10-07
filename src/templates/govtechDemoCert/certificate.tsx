import { format } from "date-fns";
import { get } from "lodash";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
//import { PrintWatermark } from "./common/PrintWatermark";
import sutLogo from "./common/sutlogo.png";
//import logo from "./common/SutLetter_logo.png";
import certificateBg from "./common/certificate_background.png";



export const CertificateTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => {

  const lastCredit = document.transcript[document.transcript.length-1].totalCredit;

  var x: number = +(lastCredit);
 
  if (x < 178){
      return (<div className="my-5 m-lg-5 text-center" style={{ paddingTop: "5%"}}> 
        <font size="4"> Undergraduate </font>
        </div>);
  }
  else {
  return (

      <div
        className="p-2"
        style={{
          border: "10px solid #FFFFFF"
        }}
      >

        <div style={{paddingTop: "2%"}}>
          <div className="text-center" ><img src={sutLogo} alt="SUT Logo" 
          style={{ width: "10%", height: "10%"}} />
           <div className="tranhead text-left" style={{ paddingLeft: "60%", lineHeight: "40px"}}>
           <font size="4">Suranaree University of Technology <br/>
           111 University Avenue<br />
           Muang District, Nakhon Ratchasima 30000</font>
          </div></div>
        
          </div>

        <div className="my-5 m-lg-5 text-center" style={{ paddingTop: "7%"}}> 
        <font size="4"> This is to certify that</font>
        </div>
        <div className="my-5 m-lg-5 cert-body" style={{ textAlign: "center"}}>
          <font size="5"><b>
          <div style={{display: "inline", textTransform: "capitalize"}}>
          {document.recipient.nameTitle1}</div> <div style={{display: "inline", textTransform: "uppercase"}}>
          {document.recipient.nameENG}</div></b></font><br/>
          <font size="4">(Student Identification Number: {document.recipient.studentID})</font>
        </div>
        
        <div className="my-5 text-left" style={{paddingLeft: "5%", lineHeight: "40px"}}>
          <font size="4">has been conferred the degree of {document.recipient.degreeENG} for the Academic Year {document.recipient.lastyear} since<br />
           {document.recipient.graduationDate} with the approval of the Suranaree University of Technology Councill.
            </font>
        </div>
        <div className="text-left" style={{paddingLeft: "15%"}}>
          <font size="4">Given on {get(document, "issuedOn")}
            </font>
        </div>
      <div className="text-center" style={{paddingLeft: "25%", paddingTop: "10%", lineHeight: "40px"}}>
          <font size="4">
          <b>{get(document, "certSignatories.name")}</b><br/>
          ({get(document, "certSignatories.nameTitle2")} {get(document, "certSignatories.name")})<br/>
          Acting Chief, Evaluation and Graduate Informaion Section<br/>
              Assistant {get(document, "certSignatories.position")}<br />
            </font>
        </div>
            <div className="text-left" style={{paddingLeft: "8%", paddingTop: "18%"}}>
         <font size="3">National Identification Number {document.recipient.identNum}
            </font>
        </div>
        <div className="my-5 m-lg-2 text-center" style={{ textAlign: "center", paddingTop: "12%"}}> 
         <font size="4"><b>(NOT VALID WITHOUT UNIVERSITY SEAL)</b></font>
        </div>
      </div>
  );
  }
};