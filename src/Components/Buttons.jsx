/* eslint-disable react/prop-types */ 
import "../styles/Buttons.css";
import { FaTrash } from "react-icons/fa";

const Buttons = ({remove, cancel, save}) => {
  return (
    <div className="buttons">
      <button className="delete" type="button" onClick={remove}>
        <FaTrash></FaTrash>
        Delete
      </button>
      <div className="main-buttons">
        <button className="cancel" type="button" onClick={cancel}>Cancel</button>
        <button className="save" type="submit" onClick={save}>Save</button>
      </div>
    </div>
  );
};

export default Buttons;
