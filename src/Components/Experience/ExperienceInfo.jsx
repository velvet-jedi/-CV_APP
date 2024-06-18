
/* eslint-disable react/prop-types */
// child component for displaying individual experience info in the experience section of the resume
// import "../../styles/ExperienceInfo.css";

const ExperienceInfo = ({ info }) => {

    const {startDate, endDate, companyName, positionTitle, description } = info;


  return (
    <div className="experience-info">
      <div className="experience-info-group">
        <p className="dates">
            {startDate}
            {startDate && endDate && ' - '}
            {endDate}
        </p>
      </div>

      <div className="experience-info-group">
        <p className="experience-info-companyName">{companyName}</p>
        <p className="experience-info-positionTitle">{positionTitle}</p>
        <p className="experience-info-description">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceInfo;
