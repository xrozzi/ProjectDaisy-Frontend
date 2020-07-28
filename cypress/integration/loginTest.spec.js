// /// <reference types="cypress" />

// it("login by email", () => {
//   cy.visit("localhost:3001/login");

//   cy.get("#email").type("admin@projectdaisy.com.au");
// });

// it("adds a description", () => {
//   cy.visit("localhost:3001/login");

//   cy.get("#password").type("secretpassword");
// });

// it("completes git listing", () => {
//   cy.visit("localhost:3001/login");

//   cy.get("#login").click({ multiple: true });
// });

// cy.location('pathname').should('eq', '/newthing/:id')

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

  cy.url().should("eq", "http://localhost:3001/CreateGitListing");

  //   cy.getCookie(userToken).its("value").should("eq", "true");
});
