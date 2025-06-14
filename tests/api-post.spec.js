const { test, expect } = require('@playwright/test');

test('Create a new post via API', async ({ request }) => {
  const newPost = {
    title: 'amber sdet project',
    body: 'learning API POST request',
    userId: 101,
  };

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: newPost,
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body).toMatchObject(newPost);
});
