/* eslint-disable react/prop-types */
import "../styles/InputField.css";

const InputField = ({ id, value, labelText, placeholder, type, onChange, "data-key": dataKey, }) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
      </label>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        data-key={dataKey} // pass a data-key prop which is then set as a data-key attribute on the input element. This custom data attribute is used to store the key that identifies which part of the state the input field corresponds to.
      />
    </div>
  );
};

export default InputField;
