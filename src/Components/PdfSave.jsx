import { jsPDF } from "jspdf";
import { FaDownload } from "react-icons/fa6";
import "../styles/PdfSave.css";

const PdfSave = () => {
  const generatePDF = () => {
    const CV = new jsPDF("portrait", "pt", "a4");
    CV.html(document.querySelector(".resume")).then(() => {
      CV.save("resume.pdf");
    });
  };

  return (
    <div className="cv-download">
      <button onClick={generatePDF} className="download-button">
        <div className="inner">
          <p>Download CV</p>
          
          <FaDownload />
        </div>
        
      </button>
    </div>
  );
};

export default PdfSave;
