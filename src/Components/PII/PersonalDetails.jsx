import '../../styles/index.css'
import InputField from "../InputField"; 

const PersonalDetails = () => {
  return (
    <>
      <form className="personal-details">
        <h2>Personal Details</h2>
        <InputField
          id="full-name"
          type="text"
          placeholder="Enter your full name"
          labelText="Full Name"
          value={fullName}
        />
      </form>
    </>
  );
};

export default PersonalDetails;
