/* eslint-disable react/prop-types */ 
import '../../styles/ExperienceForm.css';
import Buttons from "../Buttons";
import InputField from "../InputField"

const ExperienceForm = (props) => {

    const {companyName='', position='', startDate='', endDate='', description='', id=''} = props.form || {};
    const { onChange, save, remove, cancel } = props; // for buttons

  return (
    <form 
        id={id}
        className="experience-form section-form"
        onSubmit={(e) => e.preventDefault()}
    >
        <InputField 
            type='text'
            id='company-name'
            labelText='Company Name'
            placeholder='Enter Company Name'
            onChange={onChange}
            value={companyName}
        />

        <InputField 
            type='text'
            id='position'
            labelText='Position Title'
            placeholder='Enter Position Title'
            onChange={onChange}
            value={position}
        />

        <InputField 
            type="date"
            id="date"
            labelText="Start Date"
            placeholder="Enter Start date"
            value={startDate}
            onChange={onChange}
        />

        <InputField 
            type='date'
            id='date'
            labelText="End Date"
            placeholder='Enter End Name'
            value={endDate}
            onChange={onChange}
        />

        <Buttons 
            save={save}
            remove={remove}
            cancel={cancel}
        />
        
    </form>
  )
}

export default ExperienceForm