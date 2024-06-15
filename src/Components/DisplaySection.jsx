/* eslint-disable react/prop-types */


const DisplaySection = ({ array, InfoComponent, title }) => {
  return (
    <>
      {array && (
        <div>
          <h3 className='header-text'>{title}</h3>
          {array.map(
              (info) =>
                  <InfoComponent
                      info={info}
                      key={info.id}
                  />
          )}
        </div>
      )}
    </>
  )
}

export default DisplaySection;