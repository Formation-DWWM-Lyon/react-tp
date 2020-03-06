import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const PeopleList = ({ people, fetchData }) =>
  <div>
    <Button variant="outline-primary" onClick={fetchData}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </Button>
    <ul>
      {people.map( (person, index) =>
        <li key={index}>{person.name.first} {person.name.last}</li>
      )}
    </ul>
  </div>
;

export default PeopleList;
