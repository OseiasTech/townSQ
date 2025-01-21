/// <reference types="cypress"/>
import loginElements from "../elements/loginElements";

const elements = loginElements.loginPage;

class loginPage {
  accessSite() {
    cy.visit(Cypress.config('baseUrl'));
  }

  preencherCredenciais(username, password) {
    cy.get(elements.usernameText).type(username); 
    cy.get(elements.passwordText).type(password); 
  }

  submit() {
    cy.get(elements.loginButton).click(); 
  }

  validateProductPage() {
    cy.get(elements.logo).should('be.visible');
    cy.get(elements.inventorylist).should('be.visible');

  }
}

export default loginPage;
