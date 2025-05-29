exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.usernameTextbox = page.getByLabel('Username');
        this.passwordTextbox = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
          await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }
}