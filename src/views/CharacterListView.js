import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters }  from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      <div className="Fetching-Data">
      Fetching data!
      </div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}



// our mapStateToProps needs to have two properties inherited from state
const mapStateToProps = state => {
  return {
    characters: state.characters,
    fetching: state.fetching
  }
}

// the characters and the fetching boolean
export default connect(
  mapStateToProps, 
  {
    getCharacters
    /* action creators go here */
  }
)(CharacterListView);
