import React from 'react';
import { connect } from 'react-redux';
import { Button, Dimmer, Loader } from 'semantic-ui-react';
import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import {
  listURL,
  ACTION_TYPES,
} from './redux/Actions';
import {
  selectIsLoading,
  selectList,
  selectListError,
  selectFilm,
} from './redux/Selectors';
import './App.css';
import List from './components/List';
import ButtonsList from './components/Buttons';
import FilmShow from './components/Film';

const App = ({
  isLoading,
  error,
  list,
  loadData,
  film,
}) => {
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

  if (!list) {
    return (   
      <div className="container">  
        <Link to="/home"> 
          <Button 
            color='red'
            className="start-button" 
            size='massive'
            type="button"
            onClick={() => loadData(true)}
          >
            Start!
          </Button>
        </Link>
      </div>
    );
  }

  if (film) {
    return (
      <Route path={`/${film}`} exact>
        <FilmShow />
      </Route>
    )
  }

  return (
    <Switch>
      <Route path="/home" >
        <div className="main__container">
          <div className="upper__container">
            <ButtonsList />
          </div>
          <div className="lower__container">
            <List />     
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function mapState2Props(state) {
  return {
    list: selectList(state),
    error: selectListError(state),
    isLoading: selectIsLoading(state),
    film: selectFilm(state),
  };
}

const mapDispatch2Props = dispatch => ({
  loadData: () => dispatch(listURL()),
  stopLoading: isLoading => dispatch({
    type: ACTION_TYPES.STOP_LOADING,
    isLoading,
  }),
});

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(App);

export {Enhanced as App };


