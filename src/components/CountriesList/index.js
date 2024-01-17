import './index.css'

const CountriesList = props => {
  const {countryDetails, addVisitedCountries} = props
  const {name, isVisited, id} = countryDetails

  const visitCountry = () => {
    addVisitedCountries(id)
  }

  return (
    <li className="country-list-item">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="para">Visited</p>
      ) : (
        <button
          type="button"
          data-testid="remove-button"
          className="button"
          onClick={visitCountry}
        >
          Visit
        </button>
      )}
    </li>
  )
}

export default CountriesList
