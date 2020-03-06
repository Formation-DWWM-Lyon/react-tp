import React from 'react';
import data from '../data';
import { Comment } from '.';

const CommentList = ({ personIndex }) =>
  <ul>
    {data[personIndex].comments.map( (comment, index) =>
      <li key={index}>
        <Comment {...comment} />
      </li>
    )}
  </ul>
;

export default CommentList;
