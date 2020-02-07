import React, { useState } from 'react';
import { connect } from 'react-redux';
import { 
  Button, 
  Dimmer, 
  Loader, 
  Label, 
  Segment,
  List 
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { listURL } from '../redux/Actions';
import { 
  selectList, 
  selectFilm,
  selectPlanet,
  selectListError,
  selectIsLoading,
  selectCharacters,
  selectStarships,
  selectVehicles,
  selectSpecies,  
} from '../redux/Selectors';

import FilmTable from './FilmTable';
import Planets from './Planets';
import Characters from './Characters';
import Species from './Species';
import Starships from './Starships';
import Vehicles from './Vehicle';
import '../App.css';

const Film = ({ 
  loadData, 
  characters,
  starships, 
  isLoading, 
  error,
  planets,
  vehicles, 
  film,
  list,
  species
}) => {

  const [rightPlanet, setRightPlanet] = useState([]);
  const [rightVehicles, setRightVehicles] = useState([]);
  const [rightSpecies, setRightSpecies] = useState([]);
  const [rightCharacters, setRightCharacters] = useState([]);
  const [rightStarships, setRightStarships] = useState([]);

  const toShow = () => {
    if (film) {
      return list.filter(item => item.id === film)[0];
    }
  }

  if (isLoading) {
    return (
      <Dimmer active>
        <Loader size='massive'>Loading...</Loader>
      </Dimmer>
    );
  }

  if (error) {
    return (
      <>
        <p>Error occurred!!!</p>
        <Button
          type="button"
          onClick={() => loadData(true)}          
        >
            Try Again!
        </Button>
      </>
    );
  }

  if (rightSpecies.length) {
    return rightSpecies.map(species => (
      <Species species={species} key={species.id} />
    ))
  }

  if (rightStarships.length) {
    return rightStarships.map(starship => (
      <Starships starship={starship} key={starship.id} />
    ))
  }

  if (rightVehicles.length) {
    return rightVehicles.map(vehicles => (
      <Vehicles vehicles={vehicles} key={vehicles.id} />
    ))
  }

  if (rightCharacters.length) {
    return rightCharacters.map(character => (
      <Characters character={character} key={character.id} />
    ))
  }
  
  if (rightPlanet.length) {
    return rightPlanet.map(planet => (
      <Planets planet={planet} key={planet.id} />
    ))
  }

  if (film 
    && toShow() 
    && characters 
    && starships 
    && planets 
    && vehicles 
    && species
  ) {
    
    return (
      <>
        <div className="film__container">

          <Link to="/home">
            <Button 
              type="button" 
              color='red' 
              onClick={() => loadData()} 
              icon='home' 
              className="home-button" 
            />
          </Link>

          <div className="film__list">

            <FilmTable toShow={toShow()} />

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
          </div>
        </div>        
      </>
    )
  } 

  return (
    <Dimmer active>
      <Loader size='massive'>Loading, wait few seconds please!</Loader>
    </Dimmer>
  )
} 

  function mapState2Props(state) {
    return {
      planets: selectPlanet(state),
      error: selectListError(state),
      isLoading: selectIsLoading(state),
      list: selectList(state),
      film: selectFilm(state),
      characters: selectCharacters(state),
      starships: selectStarships(state),
      vehicles: selectVehicles(state),
      species: selectSpecies(state),
    };
  }

  const mapDispatch2Props = dispatch => ({
    
    loadData: () => dispatch(listURL()),
  });
  
  const FilmShow = connect(
    mapState2Props,
    mapDispatch2Props,
  )(Film);
  
  export default FilmShow;