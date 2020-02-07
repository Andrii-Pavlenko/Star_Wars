import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Label, Table, Button } from 'semantic-ui-react';
import {
  listURL,
} from '../redux/Actions';
import '../App.css';

const Character = ({ loadData, character }) => {
  return (
    <div className="characters-container">
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
          Character:
        </Label>
        <Table definition inverted >
          <Table.Body>
            <Table.Row>
              <Table.Cell>Name:</Table.Cell>
              <Table.Cell>{character.name}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Height:</Table.Cell>
              <Table.Cell>{character.height}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Mass:</Table.Cell>
              <Table.Cell>{character.mass}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Hair color:</Table.Cell>
              <Table.Cell>{character.hair_color}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Skin color:</Table.Cell>
              <Table.Cell>{character.skin_color}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Eye color:</Table.Cell>
              <Table.Cell>{character.eye_color}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Birth year:</Table.Cell>
              <Table.Cell>{character.birth_year}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Gender:</Table.Cell>
              <Table.Cell>{character.gender}</Table.Cell>
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

const Characters = connect(
  null,
  mapDispatch2Props,
)(Character);

export default Characters;