import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Label, Table, Button } from 'semantic-ui-react';
import {
  listURL,
} from '../redux/Actions';
import '../App.css';

const Planet = ({ loadData, planet }) => {
  return (
    <div className="planets-container">
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
          Planet:
        </Label>
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>{planet.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Diameter</Table.Cell>
              <Table.Cell>{planet.diameter}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Gravity</Table.Cell>
              <Table.Cell>{planet.gravity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Orbital Pperiod</Table.Cell>
              <Table.Cell>{planet.orbital_period}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Population</Table.Cell>
              <Table.Cell>{planet.population}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Rotation period</Table.Cell>
              <Table.Cell>{planet.rotation_period}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Surface Water</Table.Cell>
              <Table.Cell>{planet.surface_water}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Terrain</Table.Cell>
              <Table.Cell>{planet.terrain}</Table.Cell>
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

const Planets = connect(
  null,
  mapDispatch2Props,
)(Planet);

export default Planets;