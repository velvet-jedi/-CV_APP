/* eslint-disable react/prop-types */
// reusable component for displaying education info in the education section of the resume
import '../../styles/EducationInfo.css';

const EducationInfo = ({info}) => {
    var {schoolName, degree, startDate, endDate} = info;
    const today = new Date();

    // parse the date string into a Date object
    const parseDate = (dateString) => {
        if(!dateString) return null;
        const [year, month, day] = dateString.split('-');
        return new Date(year, month-1, day);
    }
    
    const parsedEndDate = parseDate(endDate);

    // if the end date is in the future, set the end date to today
    if(parsedEndDate && parsedEndDate > today) {
        endDate = 'Present';
    }

  return (
    <div className="education-info">
        <div className="education-info-group">
            <p className="dates">
                {startDate}
                {startDate && endDate && ' to '}
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