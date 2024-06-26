/* eslint-disable react/prop-types */

import { FaPlus } from "react-icons/fa6";
import "../styles/CreateForm.css";

const CreateForm = ({ onClick, buttonText }) => {
  return (
    <button className="create-form" onClick={onClick}>
      <h4 className="button-content">
        <FaPlus className="fa-plus"></FaPlus>
        {buttonText}
        </h4>
    </button>
  );
};

export default CreateForm;
