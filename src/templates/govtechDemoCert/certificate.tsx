import { format } from "date-fns";
import { get } from "lodash";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
import { PrintWatermark } from "./common/PrintWatermark";
//import mainLogo from "./common/opencertslogo.svg";
import sutLogo from "./common/sutlogo.png";
import logo from "./common/SutLetter_logo.png";
import certificateBg from "./common/certificate_background.png";

export const CertificateTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => {
  //const transcriptData = document.transcript || [];
  var x: number = +(document.totalCredit);
  if (x < 169){
      return (<div className="my-5 m-lg-5 text-center" style={{ paddingTop: "5%"}}> 
        <font size="4"> Undergraduate </font>
        </div>);
  }
  else {
  return (
      <div
        className="p-2"
        style={{
          border: "0px solid #324353"
        }}
      >

        <div style={{paddingTop: "2%"}}>
          <div className="text-center" ><img src={sutLogo} alt="SUT Logo" 
          style={{ width: "10%", height: "10%"}} />
           <div className="tranhead text-left" style={{ paddingLeft: "60%", lineHeight: "40px"}}>
           <font size="4">Suranaree University of Technology<br/>
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
          {document.gender}</div> <div style={{display: "inline", textTransform: "uppercase"}}>
          {document.recipient.name}</div></b></font><br/>
          <font size="4">(Student Identification Number: {document.studentID})</font>
        </div>
        
        <div className="my-5 text-left" style={{paddingLeft: "5%", lineHeight: "40px"}}>
          <font size="4">has been conferred the degree of Bachelor of {document.recipient.bname} for the Academic Year {document.lastyear} since<br />
           {document.graduationDate} with the approval of the Suranaree University of Technology Councill.
            </font>
        </div>
        <div className="text-left" style={{paddingLeft: "15%"}}>
          <font size="4">Given on {document.issuedOn}
            </font>
        </div>
      <div className="text-center" style={{paddingLeft: "25%", paddingTop: "10%", lineHeight: "40px"}}>
          <font size="4">
          <b>{get(document, "additionalData.certSignatories[0].name")}</b><br/>
          (Miss {get(document, "additionalData.certSignatories[0].name")})<br/>
          Acting Chief, Evaluation and Graduate Informaion Section<br/>
              Assistant Regiser<br />
            </font>
        </div>
            <div className="text-left" style={{paddingLeft: "8%", paddingTop: "20%"}}>
         <font size="3">National Identification Number {document.identNum}
            </font>
        </div>
        <div className="my-5 m-lg-2 text-center" style={{ textAlign: "center", paddingTop: "12%"}}> 
         <font size="4"><b>(NOT VALID WITHOUT UNIVERSITY SEAL)</b></font>
        </div>

     {/*
        <div
          className="row"
          style={{
            paddingRight: "8%",
            paddingTop: "15%"
          }}
        >
          <div className="col text-center transcript">
            <img
              style={{ width: "100%", height: "auto" }}
              src={get(document, "additionalData.certSignatories[0].signature")}
            />
            <hr
              style={{
                border: "none",
                height: "1px",
                backgroundColor: "#333"
              }}
            />
            <div>
              <b>{get(document, "additionalData.certSignatories[0].name")}</b>
              <br />
              {get(document, "additionalData.certSignatories[0].position")},{" "}
              {get(document, "additionalData.certSignatories[0].organisation")}
            </div>
          </div>

          <div className="col" />

          <div
            className="d-flex flex-row-reverse col transcript"
            style={{
              paddingTop: "5%",
              paddingRight: "5%"
            }}
          >
            Dated {format(document.issuedOn, "DD/MM/YYYY")}
          </div>
        </div>*/}
      </div>
  );
  }
};