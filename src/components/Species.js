import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Label, Table, Button } from 'semantic-ui-react';
import {
  listURL,
} from '../redux/Actions';
import '../App.css';

const Specie = ({ loadData, species }) => {
  return (
    <div className="species-container">
      <div className="film__list species">
        <Link to="/home">
          <Button 
            type="button" 
            color='red' 
            onClick={() => loadData()} 
            icon='home' 
            className="home-button" 
          />
        </Link>
        <Label color='red' className="label">
          Specie:
        </Label>
        <Table definition inverted >
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name:</Table.Cell>
              <Table.Cell>{species.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Classification:</Table.Cell>
              <Table.Cell>{species.classification}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Designation:</Table.Cell>
              <Table.Cell>{species.designation}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Average height:</Table.Cell>
              <Table.Cell>{species.average_height}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Skin colors:</Table.Cell>
              <Table.Cell>{species.skin_colors}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hair colors:</Table.Cell>
              <Table.Cell>{species.hair_colors}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Eye colorss:</Table.Cell>
              <Table.Cell>{species.eye_colors}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Average lifespan:</Table.Cell>
              <Table.Cell>{species.average_lifespan}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>language:</Table.Cell>
              <Table.Cell>{species.language}</Table.Cell>
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

const Species = connect(
  null,
  mapDispatch2Props,
)(Specie);
  
  export default Species;;