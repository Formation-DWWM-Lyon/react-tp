import React from 'react';
import { Card, Image, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileCard = ({ name, picture, gender, location, registered, dob }) =>
  <Card className="text-center">
    <Card.Header>
      <Image src={picture.large} roundedCircle />
      <Card.Title className="mt-2">
        {name.first} {name.last}
      </Card.Title>
    </Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <FontAwesomeIcon
          className={`genderIcon ${gender}`}
          icon={gender === 'male' ? faMars : faVenus}
        />
      </ListGroup.Item>
      <ListGroup.Item>
        {dob.age} ans
      </ListGroup.Item>
      <ListGroup.Item>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        {' '}
        {location.city}
      </ListGroup.Item>
    </ListGroup>
    <Card.Footer>
      <small>
        Membre depuis le {new Date(registered.date).toLocaleDateString('fr-FR')}
      </small>
    </Card.Footer>
  </Card>
;

export default ProfileCard;
