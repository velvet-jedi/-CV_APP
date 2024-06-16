
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
  const [sections, setSections] = useState({
    educations: [
      {
        degree: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",
        
        // isHidden: true,
        // id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "",
        positionTitle: "",
        location: "",
        description:"",
        startDate: "",
        endDate: "",
        
        // isHidden: false,
        // id: uniqid(),
      
      }
    ]
  });
  const [sectionOpen, setSectionOpen] = useState(null);

//   user edits their PII in a form field,
// this function captures the change, updates the app's state to reflect the new info. The user's input is reflected throughout the app.
  function handlePersonalInfoChange(e){ // event object
    const { key } = e.target.dataset; // extract the data-key property from the dataset object of the target element (the input field that was changed). This key likely corresponds to the specific piece of personal information being edited (e.g., "fullName", "email", etc.).
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });

  }

  //  identify which form, fields user is interacting with, update the state when a user modifies an input field in the education or experience sections, resulting in rerender 
  function handleSectionChange(e){
    const { key } = e.target.dataset; // Extracts the specific field being edited (e.g., "schoolName") 'data-key' from EducationForm input field
    const inputValue = e.target.value; // Gets the new value entered by the user
    const form = e.target.closest(".section-form") // // Finds the closest <form> element with class section-form with the input field that triggered the event)
    const { id } = form; // 
    const { arrayName } = form.dataset;    // 

    // const section = sections[arrayName];
    // setSections({
    //   ...sections,
    //   [arrayName]: section.map((obj) => { // map over sections array
    //     if (obj.id === id) obj[key] = inputValue;
    //     return obj;
    //   }),
    // });


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

        <AddEducationSection 
          educations={sections.educations}
          isOpen={sectionOpen === "Education"}
          onChange={handleSectionChange}
          // createForm={createEducationForm}
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
