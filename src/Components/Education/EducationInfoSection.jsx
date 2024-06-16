/* eslint-disable react/prop-types */
import EducationInfo from "./EducationInfo";
import DisplaySection from "../DisplaySection";



const EducationInfoSection = ({ educations}) => {
  return (
    <div className="education-info-section resume-section">
        <DisplaySection
            array={educations}
            InfoComponent={EducationInfo}
            title='Education'
        />
    </div>
  )
}

export default EducationInfoSection