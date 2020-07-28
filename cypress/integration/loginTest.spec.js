/// <reference types="cypress" />

it("login by email", () => {
  cy.visit("localhost:3001/login");

  cy.get("#email").type("admin@projectdaisy.com.au");
});

it("adds a description", () => {
  cy.visit("localhost:3001/login");

  cy.get("#password").type("secretpassword");
});

it("completes git listing", () => {
  cy.visit("localhost:3001/login");

  cy.get("#login").click({ multiple: true });
});
