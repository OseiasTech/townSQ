import loginPage from "../page/loginPage";
const credentials = require('../../fixtures/credentials.json');


const login = new loginPage();

Given(/^that I am on the login page$/, () => {
  login.accessSite();
});

When(/^I enter a valid "username" and a valid "password"$/, () => {
   const username = credentials.accepted_usernames[0]; 
  const password = credentials.password;
  login.preencherCredenciais(username, password);
});

And(/^I click on the "Login" button$/, () => {
  login.submit(); 
});

Then(/^I am redirected to the products page$/, () => {
  login.validateProductPage(); 
});
