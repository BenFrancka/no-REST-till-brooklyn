export const fetchApiEndpoint = (url, method, body) => {
  if(method === 'GET') {
    return fetch(url, {
      method: 'GET',
    });
  } else if(method === 'PUT' || method === 'POST' || method === 'PATCH') {
    return fetch(url, {
      method: `${method}`,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  } else {
    return fetch(url, {
      method: 'DELETE',
    });
  }
};
