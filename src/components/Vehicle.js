import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Label, Table, Button } from 'semantic-ui-react';
import {
  listURL,
} from '../redux/Actions';
import '../App.css';

const Vehicle = ({ loadData, vehicles }) => {
  return (
    <div className="vehicle-container">
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
          Vehicle:
        </Label>
        <Table definition inverted>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name:</Table.Cell>
              <Table.Cell>{vehicles.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Rotation period:</Table.Cell>
              <Table.Cell>{vehicles.rotation_period}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Orbital period:</Table.Cell>
              <Table.Cell>{vehicles.orbital_period}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Diameter:</Table.Cell>
              <Table.Cell>{vehicles.diameter}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Climate:</Table.Cell>
              <Table.Cell>{vehicles.climate}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Gravity:</Table.Cell>
              <Table.Cell>{vehicles.gravity}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Terrain:</Table.Cell>
              <Table.Cell>{vehicles.terrain}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Surface water:</Table.Cell>
              <Table.Cell>{vehicles.surface_water}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Population:</Table.Cell>
              <Table.Cell>{vehicles.population}</Table.Cell>
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

const Vehicles = connect(
  null,
  mapDispatch2Props,
)(Vehicle);

export default Vehicles;