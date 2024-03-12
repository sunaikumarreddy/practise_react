// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {googleSearch: ''}

  displaySuggestion = suggestion => {
    this.setState({googleSearch: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({googleSearch: event.target.value})
  }

  render() {
    const {googleSearch} = this.state
    const {suggestionsList} = this.props
    const filterSearchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(googleSearch.toLowerCase()),
    )

    return (
      <div className="MainContainerGoogleSuggestionsPage">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="GoogleLogoImageContainer"
        />
        <div className="SearchBoxContainer">
          <div className="SearchLogoInputContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="SearchLogo"
            />
            <input
              type="search"
              value={googleSearch}
              placeholder="Search Google"
              className="googleSuggestionsInput"
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul>
            {filterSearchResults.map(suggestion => (
              <SuggestionItem
                eachItem={suggestion}
                displaySuggestion={this.displaySuggestion}
                key={suggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
