import './index.css'

const VisitedCountries = props => {
  const {visitedCountryDetails, removeVisitedCountry} = props
  const {imageUrl, name, id} = visitedCountryDetails

  const deleteCountry = () => {
    removeVisitedCountry(id)
  }

  return (
    <li className="visited-countries-list">
      <img src={imageUrl} alt="thumbnail" className="country-image" />
      <div className="details-section">
        <p className="visited-country-title">{name}</p>
        <button className="remove-button" type="button" onClick={deleteCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
