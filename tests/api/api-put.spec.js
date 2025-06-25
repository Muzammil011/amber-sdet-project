const { test, expect } = require('@playwright/test');

test('Update a post using PUT request', async ({ request }) => {
  const updatedPost = {
    title: 'Updated Title',
    body: 'Updated body content',
    userId: 1,
  };

  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: updatedPost,
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toMatchObject(updatedPost);
});
