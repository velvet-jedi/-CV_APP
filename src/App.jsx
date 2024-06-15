
import "./styles/App.css";
import { useState } from "react";
import PersonalDetails from "./Components/PII/PersonalDetails";
import Resume from "./Components/Resume";
import AddEducationSection from "./Components/Education/AddEducationSection";



function App() {

  const [personalInfo, setPersonalInfo] = useState('');
  const [sections, setSections] = useState('');
  const [sectionOpen, setSectionOpen] = useState(null);

  return (
    <>
      
      <div className="app">
        <div className="edit-side">
          <div className="form-container">
            <PersonalDetails />
          </div>
        </div>

        <AddEducationSection 
          educations={sections.educations}
          isOpen={sectionOpen === "education"}
          // onChange={handleSectionChange}
          // createForm={createEducationGorm}
          // setOpen={setOpen}
          // onCancel={cancelForm}
          // onRemove={removeForm}
        />

        <Resume 
            personalInfo={personalInfo}
            sections={sections}
        />  


      </div>
      
    </>
  );
}

export default App;
