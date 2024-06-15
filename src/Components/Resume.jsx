// render the resume with all the sections of the resume
/* eslint-disable react/prop-types */

// import '../styles/Resume.css';

import PersonalInfoSection from "./PII/PersonalInfoSection"
import EducationInfoSection from "./Education/EducationInfoSection"
import ExperienceInfoSection from "./Experience/ExperienceInfoSection"

const Resume = ({ personalInfo, sections }) => {
  return (
    <div className="resume-container">
        <h1>Rseume</h1>
        <PersonalInfoSection  
            fullName={personalInfo.fullName}
            email={personalInfo.email}
            phoneNumber={personalInfo.phoneNumber}
        />
        <EducationInfoSection  
            educations={sections.educations}

        />
        <ExperienceInfoSection  
            experiences={sections.experiences}
        />
    </div>
  )
}

export default Resume