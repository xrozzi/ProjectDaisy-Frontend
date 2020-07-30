/// <reference types="cypress" />

it("Logs in a user", () => {
  cy.visit("localhost:3001/login");

  cy.get("[type='email']").type("user@user.com");

  cy.get("[type='password']").type("adminsecrect");

  cy.get("#login").click();

  cy.url().should("eq", "http://localhost:3001/CreateGitListing");
});
