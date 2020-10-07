import { CertificateTemplate } from "./certificate";
import { TranscriptTemplate } from "./transcript";


export const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: CertificateTemplate
  },
  {
    id: "transcript",
    label: "Transcript",
    template: TranscriptTemplate
  }
];
