import React from 'react';
import { render, screen, fireEven, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            image: 'example.com/image.png',
          },
        ],
      })
    );
  })
);

describe('RESTcontainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  // eslint-disable-next-line max-len
  it('takes a url, method selection, and optional request body and returns a json response', async () => {
      
  });
});
