import React from 'react';
import { 
  Label, 
  Segment,
  List 
} from 'semantic-ui-react';

const SpeciesToShow = ({ species, setRightSpecies, rightSpecies }) => {
  
  return (
    <>
      <Label color='red' horizontal>
        Species
      </Label>   
      <Segment inverted className="segment">
        <List link inverted>
          {species.map(item => (
            <List.Item 
              as='a'
              onClick={() => setRightSpecies([...rightSpecies, item])}
              key={item.id}
            >
              {item.name}
            </List.Item>
          ))}              
        </List>
      </Segment> 
    </>
  )
}

export default SpeciesToShow;