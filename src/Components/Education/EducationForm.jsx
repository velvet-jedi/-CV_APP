/* eslint-disable react/prop-types */

import InputField from '../InputField';
import Buttons from '../Buttons';


const EducationForm = (props) => { // props object

    const {degree='', schoolName='', startDate='', endDate='', id=''} = props.form || {};
    const {onChange, cancel, save, remove} = props; // destructuring top level props from props object for buttons

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
        value={schoolName}
        data-key="schoolName"
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

    <Buttons save={save} remove={remove} cancle={cancel}></Buttons>
    </form>
  );
};

export default EducationForm;
