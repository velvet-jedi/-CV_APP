
import "./styles/App.css";
import { useState } from "react";
import PersonalDetails from "./Components/PII/PersonalDetails";
import Resume from "./Components/Resume";
import AddEducationSection from "./Components/Education/AddEducationSection";



function App() {

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [sections, setSections] = useState('');
  const [sectionOpen, setSectionOpen] = useState(null);

//   user edits their PII in a form field,
// this function captures the change, updates the app's state to reflect the new info. The user's input is reflected throughout the app.
  function handlePersonalInfoChange(e){ // event object
    const { key } = e.target.dataset; // extract the data-key property from the dataset object of the target element (the input field that was changed). This key likely corresponds to the specific piece of personal information being edited (e.g., "fullName", "email", etc.).
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });

  }

  return (
    <>
      
      <div className="app">
        <div className="edit-side">
          <div className="form-container">
            <PersonalDetails 
              onChange={handlePersonalInfoChange}
              fullName={personalInfo.fullName}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
            />
          </div>
        </div>

        {/* <AddEducationSection 
          educations={sections.educations}
          isOpen={sectionOpen === "education"}
          // onChange={handleSectionChange}
          // createForm={createEducationGorm}
          // setOpen={setOpen}
          // onCancel={cancelForm}
          // onRemove={removeForm}
  /> */}

        <Resume 
            personalInfo={personalInfo}
            sections={sections}
        />


      </div>
      
    </>
  );
}

export default App;
