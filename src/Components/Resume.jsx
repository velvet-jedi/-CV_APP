// render the resume with all the sections of the resume
/* eslint-disable react/prop-types */

import '../styles/Resume.css';

import React from 'react';

import PersonalInfoSection from "./PII/PersonalInfoSection"
import EducationInfoSection from "./Education/EducationInfoSection"
import ExperienceInfoSection from "./Experience/ExperienceInfoSection"


const Resume = React.forwardRef(({ personalInfo, sections }, ref) => {
  return (
    <div className="resume-container" ref={ref}>
        <div id="resume">
          
          <PersonalInfoSection
              fullName={personalInfo.fullName}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
          />
          <div>
            <EducationInfoSection
                educations={sections.educations}
            />
            <ExperienceInfoSection
                experiences={sections.experiences}
            />
          </div>
        </div>
    </div>
  )
});

Resume.displayName = 'Resume';

export default Resume