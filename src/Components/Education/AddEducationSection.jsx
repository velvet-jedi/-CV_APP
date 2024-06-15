/* eslint-disable react/prop-types */

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
            iconName='FaGraduationCap'
        />

        <div className={`section-content ${isOpen ? "open" : ""}`}>
            <DisplayForms 
                forms={educations}
                onChange={onChange}
                onCancle={onCancel}
                onRemove={onRemove}
                FormComponent={EducationForm}
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