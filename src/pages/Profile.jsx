import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ProfileCard, CommentList, CommentForm } from '../components';
import { Button } from 'react-bootstrap';

const Profile = ({ people, match, methods }) => {
  const { id } = match.params;
  const person = people[id];

  return (
    <div>
      <Link to="/">
        <Button>Retour à l'accueil</Button>
      </Link>
      <div className="profile mt-4">
        <ProfileCard {...person} />
        <div>
          Informations supplémentaires sur la personne..
          <CommentList personIndex={id} />
          <CommentForm personIndex={id} addComment={methods.addComment} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Profile);
