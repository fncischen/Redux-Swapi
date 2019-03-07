import React from "react";

import Character from "./Character";

const CharacterList = props => {
  console.log("check:", props);
  if (props.characters != undefined) {
    return (
      <ul>
        {props.characters.map(character => {
          return <Character key={character.name} character={character} />;
        })}
      </ul>
    );
  }
  else {
    return(
      <div className="characterList"></div>
    )
  }
};

export default CharacterList;
