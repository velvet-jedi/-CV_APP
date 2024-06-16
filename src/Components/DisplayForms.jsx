/* eslint-disable react/prop-types */

const DisplayForms = ({ forms, onChange, onCancel, onRemove, FormComponent, arrayName, titleKey }) => {
  return (
    <div className="forms-container">
        {forms.map((form) => 
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
        )}
    </div>
  )
}

export default DisplayForms