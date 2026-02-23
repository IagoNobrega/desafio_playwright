import { test, expect } from '@playwright/test';

test('test user', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Cadastro' }).click();
  await page.locator('#user').click();
  await page.locator('#email').click();
  await page.locator('#email').fill('iagoteset23@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByText('O campo nome deve ser').click();
});

test('test email', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Cadastro' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('iago lis');
  await page.locator('#email').click();
  await page.locator('#email').fill('');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByText('O campo e-mail deve ser').click();
});

test('test password', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Cadastro' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('iago lis');
  await page.locator('#email').click();
  await page.locator('#email').fill('iago2teste@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByText('O campo senha deve ter pelo').click();
});

test('test success', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: ' Cadastro' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('iago lis');
  await page.locator('#email').click();
  await page.locator('#email').fill('iago2teste@teste.com.br');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.getByRole('heading', { name: 'Cadastro realizado!' }).click();
  await page.getByText('Bem-vindo iago lis').click();
  await page.getByRole('button', { name: 'OK' }).click();
  
});