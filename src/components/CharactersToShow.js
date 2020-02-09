import React from 'react';
import {  
  Label, 
  Segment,
  List 
} from 'semantic-ui-react';

const CharactersToShow = ({ characters, setRightCharacters, rightCharacters }) => {
  
  return (
    <>
     <Label color='red' horizontal>
        Characters
      </Label>   
      <Segment inverted className="segment">
        <List link inverted>
          {characters.map(character => (
            <List.Item 
              as='a'
              onClick={() => setRightCharacters([...rightCharacters, character])}
              key={character.id}
            >
              {character.name}
            </List.Item>
          ))}              
        </List>
      </Segment> 
    </>
  )
}

export default CharactersToShow;