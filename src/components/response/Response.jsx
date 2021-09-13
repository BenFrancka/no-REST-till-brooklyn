import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import './Response.css';

const Response = ({ response }) => {
  return (
    <div className="response">
      <ReactJson src={response} />
    </div>
  );
};

Response.propTypes = {
  response: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Response;
