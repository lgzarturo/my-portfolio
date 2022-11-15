/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
import { fetch } from 'cross-fetch';
import { setupServer } from 'msw/node';
import { graphql, rest } from 'msw';

expect.extend(matchers);

global.fetch = fetch;

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'dummy title',
    body: 'dummy post body',
  },
  // ...
];

const restHandlers = [
  rest.get('https://rest-endpoint.example/path/to/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),
];

const graphqlHandlers = [
  graphql.query(
    'https://graphql-endpoint.example/api/v1/posts',
    (req, res, ctx) => {
      return res(ctx.data(posts));
    }
  ),
];

const server = setupServer(...restHandlers, ...graphqlHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: `bypass` }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
