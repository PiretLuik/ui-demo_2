import {test, expect} from '@playwright/test';
import {faker} from '@faker-js/faker';
import * as dotenv from 'dotenv';

dotenv.config();
const appUrl = process.env.URL ?? 'http://localhost:3000';
console.log(`Using URL: ${appUrl}`);

test.describe('Faker.js test', () => {
  test('should generate random user data', async () => {
    const randomName = faker.internet.displayName();
    const randomEmail = faker.internet.email();
    console.log(`Generated User: ${randomName}, Email: ${randomEmail}`);
    expect(randomName).toBeDefined();
  });
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
