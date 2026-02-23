// @ts-check
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')

  const button= await page.getByRole('button', { name: 'Send Mail' })
  await button.scrollIntoViewIfNeeded()
  await button.click()

  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('iago@teste.com.br')
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click()
  

  const buffer = await page.screenshot();
console.log(buffer.toString('base64'));
});

test('Login inválido', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
 
  
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('iagoteste');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByText('E-mail inválido.').click();


   const buffer = await page.screenshot();
console.log(buffer.toString('base64'));
});

test('Senha inválido', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/')
await page.getByRole('link', { name: ' Login' }).click();
await page.locator('#user').click();
await page.locator('#user').fill('iago@teste.com.br');
await page.locator('#password').click();
await page.locator('#password').fill('1234');
await page.getByRole('button', { name: 'login' }).click();
await page.getByText('Senha inválida.').click();
await page.getByText('Senha inválida.').click();

   const buffer = await page.screenshot();
console.log(buffer.toString('base64'));
});

