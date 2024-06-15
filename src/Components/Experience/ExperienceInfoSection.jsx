/* eslint-disable react/prop-types */
import DisplaySection from "../DisplaySection";
import ExperienceInfo from "./ExperienceInfo";


const ExperienceInfoSection = ({ experiences }) => {
  return (
    <div className="experience-info-section resume-section">
        <DisplaySection 
            array={experiences}
            InfoComponent={ExperienceInfo}
            title='Professional Experiences'
        />
    </div>
  )
}

export default ExperienceInfoSection