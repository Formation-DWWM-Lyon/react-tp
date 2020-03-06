import React from 'react';
import { Card } from 'react-bootstrap';

const Comment = ({ text, date }) =>
  <Card>
    <Card.Body>
      {text}
    </Card.Body>
    <Card.Footer>
      <small>
        Publié le {date.toLocaleString('fr-FR')}
      </small>
    </Card.Footer>
  </Card>
;

export default Comment;
