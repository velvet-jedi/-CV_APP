/* eslint-disable react/prop-types */
import DisplayForms from "../DisplayForms";
import CreateForm from "../CreateForm";
import ExperienceForm from "./ExperienceForm";
import ExpandSection from "../ExpandSection";

import { FaBriefcase } from "react-icons/fa";


const AddExperienceSection = ({
    experiences,
    isOpen,
    onChange,
    createForm,
    setOpen,
    onCancel,
    onRemove
}) => {
  return (
    <div className="add-experience-section section">
        <ExpandSection 
            isOpen={isOpen}
            setOpen={setOpen}
            sectionName='Experience'
            IconName={FaBriefcase}
        />

        <div className={`section-content ${isOpen ? "open" : ""}`}>
            <DisplayForms    //to render a list of ExperienceForm components. ???
                forms={experiences}
                onChange={onChange}
                // onChange prop is passed down to each ExperienceForm, which is the handleSectionChange function in App.jsx
                onCancel={onCancel}
                onRemove={onRemove}
                FormComponent={ExperienceForm} // this will provide the input fields for the form
                arrayName="experiences"
                titleKey="companyName"
            />
            </div>

            <CreateForm 
                onClick={createForm}
                buttonText='Experience'
            />

    </div>
  )
}

export default AddExperienceSection