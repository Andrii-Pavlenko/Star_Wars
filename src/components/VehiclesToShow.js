import React from 'react';
import {  
  Label, 
  Segment,
  List 
} from 'semantic-ui-react';

const VehiclesToShow = ({ vehicles, setRightVehicles, rightVehicles }) => {
  
  return (
    <>
      <Label color='red' horizontal>
        Vehicles
      </Label>   
      <Segment inverted className="segment">
        <List link inverted>
          {vehicles.map(vehicle => (
            <List.Item 
              as='a'
              onClick={() => setRightVehicles([...rightVehicles, vehicle])}
              key={vehicle.id}
            >
              {vehicle.name}
            </List.Item>
          ))}              
        </List>
      </Segment> 
    </>
  )
}

export default VehiclesToShow;