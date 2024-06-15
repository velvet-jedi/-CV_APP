/* eslint-disable react/prop-types */

const DisplayForms = ({ forms, onChange, onCancel, onRemove, FormComponent }) => {
  return (
    <div className="forms-container">
        {forms.map((form) => 
            <FormComponent 
                form={form}
                key={form.id}
                onChange={onChange}
                cancel={onCancel}
                Remove={onRemove}
              
            />
        )}
    </div>
  )
}

export default DisplayForms