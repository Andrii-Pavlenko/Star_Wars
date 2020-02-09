import React from 'react';
import { 
  Label, 
  Segment,
  List 
} from 'semantic-ui-react';

const StarshipsToShow = ({ starships, setRightStarships, rightStarships }) => {
  
  return (
    <>
      <Label color='red' horizontal>
        Starships
      </Label>   
      <Segment inverted className="segment">
        <List link inverted>
          {starships.map(starship => (
            <List.Item 
              as='a'
              onClick={() => setRightStarships([...rightStarships, starship])}
              key={starship.id}
            >
              {starship.name}
            </List.Item>
          ))}              
        </List>
      </Segment> 
    </>
  )
}

export default StarshipsToShow;