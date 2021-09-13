import React from 'react';
import PropTypes from 'prop-types';

const Request = ({ url, method, body, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="url"></label>
        <input
          aria-label="url"
          id="url"
          name="url"
          type="url"
          placeholder="https://"
          value={url}
          onChange={onChange}
        />
        <div>
          <label htmlFor="get">GET</label>
          <input
            aria-label="get"
            type="radio"
            value="GET"
            id="get"
            name="method"
            onChange={onChange}
            checked={method === 'get'}
          />
          <label htmlFor="post">POST</label>
          <input
            aria-label="post"
            type="radio"
            value="POST"
            id="post"
            name="method"
            onChange={onChange}
          />
          <label htmlFor="put">PUT</label>
          <input
            aria-label="put"
            type="radio"
            value="PUT"
            id="put"
            name="method"
            onChange={onChange}
          />
          <label htmlFor="patch">PATCH</label>
          <input
            aria-label="patch"
            type="radio"
            value="PATCH"
            id="patch"
            name="method"
            onChange={onChange}
          />
          <label htmlFor="delete">DELETE</label>
          <input
            aria-label="delete"
            type="radio"
            value="DELETE"
            id="delete"
            name="method"
            onChange={onChange}
          />
        </div>
        <button aria-label="request">Make Request</button>
        <textarea 
          placeholder="JSON response"
          rows="10"
          cols="50"
          name="body"
          value={body}
          onChange={onChange}></textarea>
      </form>
    </>
  );
};

Request.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Request;
