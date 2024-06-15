// import '../styles/ExpandSection.css'
/* eslint-disable react/prop-types */

import { FaChevronUp } from "react-icons/fa";

const ExpandSection = ({ isOpen, setOpen, sectionName, IconName }) => {
  return (
    <button className="expand-section" onClick={() => setOpen()}>
      <h2 className="expand-section-header">
        <IconName className={IconName} />
        {sectionName}
      </h2>

      <FaChevronUp className={`${isOpen ? "open" : ""}`}/>
    </button>
  );
};

export default ExpandSection;
