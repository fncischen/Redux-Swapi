import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters }  from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Dispatch action!");
    this.props.getCharacters;
  }

  render() {
    console.log("Check props:", this.props);
    if (this.props.fetching == true ) {
      return (
      <div className="Fetching-Data">
      Fetching data!
      </div>
      )
    }
    else { 
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
    }
  }
}



// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  console.log("This:", state);
  return {
    characters: state.characters,
    fetching: state.fetching
  }
}

console.log("MapStateToProps:", mapStateToProps);

// the characters and the fetching boolean
export default connect(mapStateToProps, getCharacters )(CharacterListView);
