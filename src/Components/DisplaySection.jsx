/* eslint-disable react/prop-types */


const DisplaySection = ({ array, InfoComponent, title }) => {
  const hasNonEmptyValues = (obj) => {
    // do any of the objects in the array contain non-empty values for their properties
    return Object.values(obj).some(value => value !== '');
  }


  const hasNonEmptyItems = array.some(obj => hasNonEmptyValues(obj));


  return (
    <>
      {array && array.length > 0 && hasNonEmptyItems &&(
        <>
          <h3 className='header-text'>{title}</h3>
          {array.map(
              (info) =>
                  <InfoComponent
                      info={info}
                      key={info.id}
                  />
          )}
        </>
      )}
    </>
  )
}

export default DisplaySection;