import React from 'react';
import { connect } from 'react-redux';
import { Button, List, Segment } from 'semantic-ui-react';
import '../App.css';

import {
  selectList,
} from '../redux/Selectors';
import {
  showFilm,
  otherURL
} from '../redux/Actions';
import { NavLink } from 'react-router-dom';

const ListToPrepare = ({ list, filmToShow, loadOther }) => {
  const loadPlanetsAndFilmToShow = (index, planets2State, vehicles2State, characters2State, starships2State, species2State) => {
    filmToShow(index);
    loadOther(planets2State);
    loadOther(vehicles2State);
    loadOther(characters2State);
    loadOther(starships2State);
    loadOther(species2State);
  }

  return (
    <List horizontal inverted className="lower__container-list">
      {list.map((item, index) => {
        return (
          <Segment.Group raised key={item.id}> 
            <Segment inverted className="segment">
              <NavLink to={`/${item.id}`} exact>
                <Button                
                  basic 
                  inverted 
                  color='red' 
                  onClick={() => loadPlanetsAndFilmToShow(index, item.planets, item.vehicles, item.characters, item.starships, item.species)}
                >
                  {item.title}
                </Button>
              </NavLink>
            </Segment>
          </Segment.Group>            
        )
      })}     
    </List>
  )
}

function mapState2Props(state) {
  return {
    list: selectList(state),
  };
}

const mapDispatch2Props = dispatch => ({
  loadOther: data => dispatch(otherURL(data)),
  filmToShow: index => dispatch(showFilm(index)),
});

const PreparedList = connect(
  mapState2Props,
  mapDispatch2Props,
)(ListToPrepare);

export default PreparedList;