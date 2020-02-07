import React from 'react';
import { Label, Table } from 'semantic-ui-react';
import '../App.css';

const FilmTable = ({ toShow }) => {
  return (
    <>
      <Label color='red' horizontal className="label">
        About film:
      </Label>
      <Table definition inverted>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Title:</Table.Cell>
            <Table.Cell>{toShow.title}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Director:</Table.Cell>
            <Table.Cell>{toShow.director}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Producer:</Table.Cell>
            <Table.Cell>{toShow.producer}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Release date:</Table.Cell>
            <Table.Cell>{toShow.release_date}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Opening crawl:</Table.Cell>
            <Table.Cell>{toShow.opening_crawl}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </> 
  )
} 

export default FilmTable;