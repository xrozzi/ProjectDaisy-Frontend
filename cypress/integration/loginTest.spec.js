/// <reference types="cypress" />

it("Logs in a user", () => {
  cy.visit("localhost:3001/login");

  cy.get("[type='email']").type("admin@projectdaisy.com.au");

  cy.get("[type='password']").type("secretpassword");

  cy.get("#login").click();

  // cy
  //   .get('#loginMessage')
  //   .should('be.visible')
  //   .should('contain.text', 'User is logged in');

  //   cy.url().should("eq", "http://localhost:3001/CreateGitListing");

  //   cy.getCookie(userToken).its("value").should("eq", "true");
});
