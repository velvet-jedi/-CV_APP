import ReactToPrint from "react-to-print";
import { FaDownload } from "react-icons/fa6";
import "../styles/PdfSave.css";
import React, { useRef } from 'react';
import Resume from './Resume.jsx';
/* eslint-disable react/prop-types */


const PdfSave = ( {personalInfo, sections} ) => {
  
  const resumeRef = useRef(); // Reference for ReactToPrint

  return (
    <div className="cv-download">
      <ReactToPrint
        trigger={() => (
          <button className="download-button">
            <div className="inner">
              <p>Download CV</p>
              <FaDownload />
            </div>
          </button>
        )}
        content={() => resumeRef.current} // Pass the Resume component reference
      />
      {/* Hide the Resume component from view, but render it for printing */}
      <div style={{ display: 'none' }}>
        <Resume ref={resumeRef} personalInfo={personalInfo} sections={sections}/>
      </div>
    </div>
  );
};

export default PdfSave;
