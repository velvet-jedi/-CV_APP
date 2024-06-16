/* eslint-disable react/prop-types */

// This component manages the list of education forms, see DisplayForms

import CreateForm from "../CreateForm"
import DisplayForms from "../DisplayForms"
import EducationForm from "./EducationForm"
import ExpandSection from "../ExpandSection"
// import "../../styles/Section.css"


const AddEducationSection = ({
    educations,
    isOpen,
    onChange,
    createForm,
    setOpen,
    onCancel,
    onRemove

}) => {
  return (
    <div className="add-education-section section">
        <ExpandSection 
            isOpen={isOpen}
            setOpen={setOpen}
            sectionName='Education'
            IconName='FaGraduationCap'
        />

        <div className={`section-content ${isOpen ? "open" : ""}`}>
            <DisplayForms    //to render a list of EducationForm components. ???
                forms={educations}
                onChange={onChange}
                // onChange prop is passed down to each EducationForm, which is the handleSectionChange function in App.jsx
                onCancel={onCancel}
                onRemove={onRemove}
                FormComponent={EducationForm} // this will provide the input fields for the form
                arrayName="educations"
                titleKey="schoolName"
            />
        </div>

        <CreateForm 
            onClick={createForm}
            buttonText='Education'
        />
    </div>
  )
}

export default AddEducationSection