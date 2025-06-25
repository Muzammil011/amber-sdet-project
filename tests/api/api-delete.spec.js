const { test, expect } = require('@playwright/test');

test('Delete a post using DELETE request', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

  expect([200, 204]).toContain(response.status());
});
