import React from 'react';
import { Button } from 'react-bootstrap';

const PeopleList = ({ people, fetchData }) =>
  <div>
    <Button onClick={fetchData}>
      Actualiser
    </Button>
    <ul>
      {people.map( (person, index) =>
        <li key={index}>{person.name.first} {person.name.last}</li>
      )}
    </ul>
  </div>
;

export default PeopleList;
