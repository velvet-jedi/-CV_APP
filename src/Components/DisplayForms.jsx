/* eslint-disable react/prop-types */
import CollapsedForm from "./CollapsedForm"

const DisplayForms = ({ forms, onChange, onCancel, onRemove, FormComponent, arrayName, titleKey, toggleCollapsed }) => {
  return (
    <div className="forms-container">
        {forms.map((form) =>

          form.isCollapsed ? (
            <CollapsedForm
                form={form}
                key={form.id}
                onClick={toggleCollapsed}
                arrayName={arrayName}
                title={form[titleKey]}
            />
          ) : (
            <FormComponent 
                form={form} // form object example, EducationForm
                key={form.id} // example, 
                onChange={onChange}
                cancel={onCancel}
                remove={onRemove}
                arrayName={arrayName}
                title={form[titleKey]} // iterates over the
                // forms array, value of the title prop is set to form[titleKey], title will be dynamically retrieved from the form object based on the property specified by the titleKey prop
            />
          )
        )}
    </div>
  )
}

export default DisplayForms