import '../styles/ExpandSection.css'
/* eslint-disable react/prop-types */

import { FaChevronUp } from "react-icons/fa";


const ExpandSection = ({ isOpen, setOpen, sectionName, IconName}) => {
  return (
    <button className="expand-section" onClick={() => setOpen(isOpen ? "" : sectionName)}>
      <h2 className="expand-section-header">
        <span style={{fontSize: "1.5em"}}>
          <IconName className={IconName} />
        </span>
        {sectionName}
      </h2>

      <FaChevronUp className={`chevron ${isOpen ? "open" : ""}`}/>
    </button>
  );
};

export default ExpandSection;
