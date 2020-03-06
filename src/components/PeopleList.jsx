import React from 'react';
import { Button, Pagination } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { ProfileCard } from '.';
import { Link } from 'react-router-dom';

const PeopleList = ({ people, methods, page }) =>
  <div>
    <Button variant="outline-primary" onClick={methods.fetchData}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </Button>
    <ul className="grid mt-4">
      {people.map( (person, index) =>
        <li key={index} className="shadow-on-hover">
          <Link to={`/person/${index}`}>
            <ProfileCard {...person}/>
          </Link>
        </li>
      )}
    </ul>
    <Pagination>
      <Pagination.Prev onClick={methods.prevPage} disabled={page === 1} />
      <Pagination.Next onClick={methods.nextPage} />
    </Pagination>
  </div>
;

export default PeopleList;
