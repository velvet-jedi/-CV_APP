
import "./styles/App.css";
import { useState } from "react";
import PersonalDetails from "./Components/PII/PersonalDetails";
import Resume from "./Components/Resume";



function App() {

  const [personalInfo, setPersonalInfo] = useState('');
  const [sections, setSections] = useState('');

  return (
    <>
      
      <div className="app">
        <div className="edit-side">
          <div className="form-container">
            <PersonalDetails />
          </div>
        </div>


        <Resume 
            personalInfo={personalInfo}
            sections={sections}
        />  


      </div>
      
    </>
  );
}

export default App;
