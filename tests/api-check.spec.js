
const { test, expect } = require('@playwright/test');

test('API returns correct post data', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);

  const body = await response.json();
  
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('title');
  expect(typeof body.title).toBe('string');
});
