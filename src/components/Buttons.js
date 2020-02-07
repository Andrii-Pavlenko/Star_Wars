import React from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import {
    searchHeros,
    listURL,
    sortHeros
  } from '../redux/Actions';
import '../App.css';

const Buttons = ({ loadData, search, sort }) => {
    return (
      <>
        <Input icon='users' iconPosition='left' placeholder='Search hero...' onChange={(e) => search(e.target.value)}/>
        <div>
            <Button type="button" color='red' onClick={() => sort()}>
                Sort!
            </Button>
            <Button type="button" color='red' onClick={() => loadData(true)}>
                Rfresh!
            </Button>
        </div>       
      </>
    )
  } 

  const mapDispatch2Props = dispatch => ({
    loadData: () => dispatch(listURL()),
    search: value => dispatch(searchHeros(value)),
    sort: () => dispatch(sortHeros()),
  });
  
  const ButtonsList = connect(
    null,
    mapDispatch2Props,
  )(Buttons);
  
  export default ButtonsList;