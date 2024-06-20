
/* eslint-disable react/prop-types */
import "../styles/CollapsedForm.css";

const CollapsedForm = (props) => {
    
    const {title, arrayName, onClick} = props;
    const {id} = props.form;
  return (
    <button
        className='collapsed-form section-form'
        id={id}
        onClick={onClick}
        data-array-name={arrayName}
    >
        <p className='collapsed-form-title'>{title}</p>

    </button>
  )
}

export default CollapsedForm