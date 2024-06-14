import InputField from "../InputField";
import "../../styles/PersonalDetails.css";

const PersonalDetails = ({ fullName, email, phoneNumber, onChange }) => {
  return (
    <>
      <form className="personal-details">
        <h2>Personal Details</h2>
        <InputField
          type="text"
          id="full-name"
          labelText="Full Name"
          placeholder="Enter your full name"
          value={fullName} //whatever the user enters
          onChange={onChange} // probably defined in app.js
        />

        <InputField
          type="email"
          id="email"
          labelText="Email"
          placeholder="Enter your email address"
          value={email} //whatever the user enters
          onChange={onChange} // probably defined in app.js
        />

        <InputField
          type="tel"
          id="phone-number"
          labelText="Phone Number"
          placeholder="Enter phone number"
          value={phoneNumber} //whatever the user enters
          onChange={onChange} // probably defined in app.js
        />
      </form>
    </>
  );
};

export default PersonalDetails;
