/* eslint-disable react/prop-types */
// represents a single education entry with fields for schoolName, degree, startDate, and endDate.

import InputField from '../InputField';
import Buttons from '../Buttons';


const EducationForm = (props) => { // props object

    const {degree='', schoolName='', startDate='', endDate='', id=''} = props.form;
    const {onChange, cancel, save, remove} = props; // destructuring top level props from props object for buttons

    // onChange prop is used as the event handler for the input fields, which will be the handleSectionChange function

  return (
    <form className="education-form section-form"
        id={id}
        data-array-name="educations"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputField
        type="text"
        id="school-name" 
        labelText="School"
        placeholder="Enter your school / university"
        onChange={onChange}
        value={schoolName} // used in handleSectionChange to destructure 'value' from the dataset object
        data-key="schoolName" // used in handleSectionChange to destructure 'key' from the dataset object
      />

      <InputField
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter your study title"
        value={degree}
        onChange={onChange}
        data-key="degree"
      />

      <div className="dates-group">
        <InputField
          type="date"
          id="date"
          labelText="Start Date"
          placeholder="Enter start date"
          value={startDate}
          onChange={onChange}
          data-key="startDate"
        />
        <InputField
          type="date"
          id="date"
          labelText="End Date"
          placeholder="Enter end date"
          value={endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>

    <Buttons save={save} remove={remove} cancle={cancel}></Buttons>
    </form>
  );
};

export default EducationForm;
