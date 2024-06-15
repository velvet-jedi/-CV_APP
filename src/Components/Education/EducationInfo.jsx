/* eslint-disable react/prop-types */
// reusable component for displaying education info in the education section of the resume
// import '../../styles/EducationInfo.css';

const EducationInfo = ({info}) => {
    const {schoolName, degree, startDate, endDate} = info;
  return (
    <div className="education-info">
        <div className="education-info-group">
            <p className="dates">
                {startDate}
                {startDate && endDate && ' - '}
                {endDate}
            </p>
        </div>
        <div className="education-info-group">
            <p className="education-info-schoolName">{schoolName}</p>
            <p className="education-info-degree">{degree}</p>
        </div>
    </div>
  )
}

export default EducationInfo