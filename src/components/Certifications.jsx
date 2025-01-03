import CertificationCard from "./CertificateCard";
import certificates from "../json/certifications.json";
export default function Certifications() {
  return (
    <div>
      <div
        id="certifications-container"
        className="certifications-container py-20 px-16 bg-gradient-to-r from-stone-950 to-indigo-950"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-rose-600 text-center text-3xl font-bold mb-14 overflow-y-hidden">
          Courses<span className="text-white"> & Certifications</span>
        </h3>
        <div className="certification-list flex flex-wrap justify-center gap-x-16 gap-y-10 mx-5 align-center overflow-y-hidden">
          {certificates.map((certificate, index) => (
            <CertificationCard
              key={index}
              Name={certificate.Name}
              Company={certificate.Company}
              IssueDate={certificate.IssueDate}
              Link={certificate.Link}
              ImgSrc={certificate.ImgSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
