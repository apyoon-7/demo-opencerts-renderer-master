import { format } from "date-fns";
import { get } from "lodash";
import React, { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./common/demoStyles.css";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { GovtechOpencertsTemplateCertificate } from "../samples";
import { PrintWatermark } from "./common/PrintWatermark";
//import mainLogo from "./common/opencertslogo.svg";
import mainLogo from "./common/sut_logo.png";
import logo from "./common/SutLetter_logo.png";
import certificateBg from "./common/certificate_background.png";

export const CertificateTemplate: FunctionComponent<TemplateProps<GovtechOpencertsTemplateCertificate>> = ({
  document
}) => (
  <>
    <PrintWatermark />
    <div
      className="p-2 container"
      style={{
        backgroundImage: `url('${certificateBg}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        border: "10px solid #324353"
      }}
    >
      <div
        className="p-2"
        style={{
          border: "0px solid #324353"
        }}
      >
        <div className="my-5 m-lg-5 text-center">
          <img src={mainLogo} alt="SUT Logo" style={{ width: "100%", height: "100%", maxWidth: "1000px" }} />
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body" style={{ textAlign: "center" }}>
          <i>This is to certify that</i>
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title">
          <b>{document.recipient.name}</b>
        </div>
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body" style={{ textAlign: "center" }}>
            <i>has been conferred the degree of Bachelor of {document.recipient.bname}</i>
        </div>
        {/* <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title" style={{ textAlign: "center" }}>
            {document.recipient.bname}
        </div> */}
        <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-body" style={{ textAlign: "center" }}>
          <i>with the approval of the Suranaree University of Technology Council.</i>
        </div>
        <div className="row">
          <div className="col" />
          <div className="col">
	  <div align="center">
            <img
              className="w-100"
              style={{ width: "100", height: "auto", maxWidth: "100px" }}
              src={logo}
                alt="SutLetter Logo"
            />
          </div>
	</div>
          <div className="col" />
        </div>

        <div
          className="row"
          style={{
            paddingLeft: "8%",
            paddingTop: "5%"
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
        </div>
      </div>
    </div>
  </>
);
