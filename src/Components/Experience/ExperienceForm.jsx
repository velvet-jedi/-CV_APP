/* eslint-disable react/prop-types */ 

import Buttons from "../Buttons";
import InputField from "../InputField"

const ExperienceForm = (props) => {

    const {companyName='', positionTitle='', startDate='', endDate='', id='', description=''} = props.form || {};
    const { onChange, save, remove, cancel } = props; // for buttons

  return (
    <form 
        id={id}
        className="experience-form section-form"
        data-array-name="experiences"
        onSubmit={(e) => e.preventDefault()}
    >
        <InputField 
            type='text'
            id='company-name'
            labelText='Company Name'
            placeholder='Enter Company Name'
            onChange={onChange}
            value={companyName}
            data-key="companyName"
        />

        <InputField 
            type='text'
            id='position-title'
            labelText='Position Title'
            placeholder='Enter Position Title'
            onChange={onChange}
            value={positionTitle}
            data-key="positionTitle"
            required
        />

        <div className="dates-group">
            <InputField
                type="date"
                id="date"
                labelText="Start Date"
                placeholder="Enter Start date"
                value={startDate}
                onChange={onChange}
                data-key="startDate"
                required
            />
            <InputField
                type='date'
                id='date'
                labelText="End Date"
                placeholder='Enter End Name'
                value={endDate}
                onChange={onChange}
                data-key="endDate"
                required
            />
        </div>

        <InputField 
            type="textarea"
            id="description"
            labelText="Description"
            placeholder="Enter Description"
            value={description}
            onChange={onChange}
            data-key="description"
            required
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