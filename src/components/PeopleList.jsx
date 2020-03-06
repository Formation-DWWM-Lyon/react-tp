import React from 'react';

const PeopleList = ({ people }) =>
  <ul>
    {people.map( (person, index) =>
      <li>{person.name.first} {person.name.last}</li>
    )}
  </ul>
;

export default PeopleList;
