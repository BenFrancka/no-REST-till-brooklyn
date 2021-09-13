import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import './Response.css';

const Response = ({ response }) => {
  console.log(response);
  return (
    <article aria-label= "response" className="response">
      <ReactJson src={response} />
    </article>
  );
};

Response.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Response;
