import "../styles/InputField.css";

const InputField = ({ id, value, labelText, placeholder, type, onChange }) => {
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
      />
    </div>
  );
};

export default InputField;
