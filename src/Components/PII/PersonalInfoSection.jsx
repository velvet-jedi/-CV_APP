/* eslint-disable react/prop-types */

// import "../../styles/PersonalInfoSection.css";

import { FaEnvelope, FaPhone } from "react-icons/fa";
const PersonalInfoSection = ({ email, phoneNumber, fullName }) => {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{fullName}</h1>
      <div className="contact-info">
        {email && (  // conditional rendering
          <div>
            <FaEnvelope />
            <span>{email}</span>
          </div>
        )}
        {phoneNumber && (
          <div>
            <FaPhone />
            <span>{phoneNumber}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoSection;
