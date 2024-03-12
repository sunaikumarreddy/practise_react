// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, displaySuggestion} = props
  const {suggestion} = eachItem

  const OnClickSuggestion = () => {
    displaySuggestion(suggestion)
  }
  return (
    <li className="SuggestionItemContainer">
      <p>{suggestion}</p>
      <button
        onClick={OnClickSuggestion}
        type="button"
        className="SuggestionDeleteButton"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="SuggestionArrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
