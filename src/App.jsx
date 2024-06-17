import "./styles/App.css";
import { useState } from "react";
import PersonalDetails from "./Components/PII/PersonalDetails";
import Resume from "./Components/Resume";
import AddEducationSection from "./Components/Education/AddEducationSection";
import uniqid from "uniqid";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [sections, setSections] = useState({
    educations: [
      // array of education form objects
      {
        degree: "",
        schoolName: "",
        location: "",
        startDate: "",
        endDate: "",

        // isHidden: true,
        id: uniqid(),
      },
    ],

    experiences: [
      // array of experience form objects
      {
        companyName: "",
        positionTitle: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",

        // isHidden: false,
        id: uniqid(),
      },
    ],
  });
  const [sectionOpen, setSectionOpen] = useState(null);

  //   user edits their PII in a form field,
  // this function captures the change, updates the app's state to reflect the new info. The user's input is reflected throughout the app.
  function handlePersonalInfoChange(e) {
    // event object
    const { key } = e.target.dataset; // extract the data-key property from the dataset object of the target element (the input field that was changed). This key likely corresponds to the specific piece of personal information being edited (e.g., "fullName", "email", etc.).
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  //  identify which form, fields user is interacting with, update the state when a user modifies an input field in the education or experience sections, resulting in rerender
  function handleSectionChange(e) {
    const { key } = e.target.dataset; // Extracts the specific field being edited of the form object(e.g., "schoolName") 'data-key' from EducationForm input field
    const inputValue = e.target.value; // Gets the new value entered by the user
    const form = e.target.closest(".section-form"); // // Finds the closest <form> element with class section-form with the input field that triggered the event)
    const { id } = form; // extracts the id property of the closest <form> element / form object
    const { arrayName } = form.dataset; // extract the data-array-name property from the dataset object of the form element, holds the name of array being updated (educations or experiences)

    const section = sections[arrayName]; // which section is being edited, extracts the specific section array educations or experiences from sections state object
    setSections({
      // update the sections state object with the newly input value from user
      ...sections, // shallow copy the sections state object using spread operator
      [arrayName]: section.map((obj) => {
        // Update the specific array (educations or experiences)
        if (obj.id === id) obj[key] = inputValue; // check if the id of the object matches the id of the form being edited.
        return obj; // Return the updated object
      }),
    });
  }



  // create a new form object
  const createEducationForm = () => {
    createForm("educations", {
      degree:"",
      schoolName:"",
      startDate:"",
      endDate:"",
      id:uniqid()
    });
  };

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
          createForm={createEducationForm}
          // setOpen={setOpen}
          // onCancel={cancelForm}
          // onRemove={removeForm}
        />

        <Resume personalInfo={personalInfo} sections={sections} />
      </div>
    </>
  );
}

export default App;
