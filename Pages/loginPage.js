export class LoginPage{

    constructor(page){
        this.page =page;
        this.userNameInput ="#loginform-username";
        this.passwordInput= "#loginform-password";
        this.loginBtn ='[name="login-button"]';
    }

    import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
      await page.goto('https://enotes.pointschool.ru/login');
      await page.getByRole('textbox', { name: 'Логин' }).click();
      await page.getByRole('textbox', { name: 'Логин' }).fill('test');
      await page.getByRole('textbox', { name: 'Пароль' }).click();
      await page.getByRole('textbox', { name: 'Пароль' }).fill('test');
      await page.getByRole('button', { name: 'Вход' }).click();
    });
    
