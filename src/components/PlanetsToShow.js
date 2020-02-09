import React from 'react';
import {  
  Label, 
  Segment,
  List 
} from 'semantic-ui-react';

const PlanetsToShow = ({ rightPlanet, planets, setRightPlanet }) => {
  
  return (
    <>
      <Label color='red' horizontal>
        Planets
      </Label>   
      <Segment inverted className="segment">
        <List link inverted>
          {planets.map(planet => {
            return (
              <List.Item 
                as='a' 
                onClick={() => setRightPlanet([...rightPlanet, planet])}
                key={planet.id}
              >
                {planet.name}
              </List.Item>
          )})}              
        </List>
      </Segment>
    </>
  )
}

export default PlanetsToShow;