import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";

function LanguagesNav({ selected, onUpdateLanguage }) {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="flex-center">
      {languages.map((language) => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selected ? { color: "rgb(187, 46, 31)" } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>
      ))}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

function popularReducer(state, action){
  if (action.type === 'success'){
    return {
      ...state,
      error:null,
      [action.selectedLanguage] : action.repos
    }
  }else if (action.type === 'error'){
      return {
        ...state,
        error: action.error.message
      }
  } else{
    throw new Error(`That action type isn't supported.`);
  }
}

export default function Popular(){
  const [selectedLanguage,setSelectedLanguage] = React.useState("All")
  const [state,dispatch] = React.useReducer(popularReducer, {error: null})

  const fetchedLanguages = React.useRef([])

  React.useEffect(() => {
    if (fetchedLanguages.current.includes(selectedLanguage) === false) {
      fetchedLanguages.current.push(selectedLanguage);

      fetchPopularRepos(selectedLanguage)
        .then((repos) => dispatch({ type: "success", selectedLanguage, repos }))
        .catch((error) => dispatch({ type: "error", error }));
    }
  }, [selectedLanguage, selectedLanguage]);

    

  const isLoading = () => !state[selectedLanguage] && state.error === null

  return (
    <React.Fragment>
      <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={setSelectedLanguage}
      />
      {isLoading() && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}
      {state[selectedLanguage] && (
        <pre>{JSON.stringify(state[selectedLanguage],null,2)}</pre>
      )}
    </React.Fragment>
  );
}

