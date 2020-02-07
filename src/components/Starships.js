import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Label, Table, Button } from 'semantic-ui-react';
import {
  listURL,
} from '../redux/Actions';
import '../App.css';

const Starship = ({ loadData, starship }) => {
  return (
    <div className="starships-container">
      <div className="film__list">
        <Link to="/home">
          <Button 
            type="button" 
            color='red' 
            onClick={() => loadData()} 
            icon='home' 
            className="home-button" 
          />
        </Link>
        <Label color='red' horizontal className="label">
          Starship:
        </Label>
        <Table definition inverted >
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name:</Table.Cell>
              <Table.Cell>{starship.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Model:</Table.Cell>
              <Table.Cell>{starship.model}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Manufacturer:</Table.Cell>
              <Table.Cell>{starship.manufacturer}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cost in credits:</Table.Cell>
              <Table.Cell>{starship.cost_in_credits}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Length:</Table.Cell>
              <Table.Cell>{starship.length}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Max atmosphering speed:</Table.Cell>
              <Table.Cell>{starship.max_atmosphering_speed}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Crew:</Table.Cell>
              <Table.Cell>{starship.crew}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Passengers:</Table.Cell>
              <Table.Cell>{starship.passengers}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cargo capacity:</Table.Cell>
              <Table.Cell>{starship.cargo_capacity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Consumables:</Table.Cell>
              <Table.Cell>{starship.consumables}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hyperdrive rating:</Table.Cell>
              <Table.Cell>{starship.hyperdrive_rating}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>MGLT:</Table.Cell>
              <Table.Cell>{starship.MGLT}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Starship class:</Table.Cell>
              <Table.Cell>{starship.starship_class}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div> 
  )
} 

const mapDispatch2Props = dispatch => ({  
    loadData: () => dispatch(listURL()),
  });
  
  const Starships = connect(
    null,
    mapDispatch2Props,
  )(Starship);
  
  export default Starships;