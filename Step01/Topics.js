import React from "react";
import { Route, Link } from "react-router-dom";
import Topic from './Topic';

const Topics = ({ match }) => {
  return (
    <div>
      <ul>
      <Link to={`${match.url}/react`}>
        <li>React</li>
      </Link>
      <Link to={`${match.url}/redux`}>
        <li>Redux</li>
      </Link>
      <Link to={`${match.url}/router`}>
        <li>Router</li>
      </Link>
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route exact path={`${match.url}`} component={()=>(<h3>Please select...</h3>)} />

    </div>
  );
};

export default Topics;
