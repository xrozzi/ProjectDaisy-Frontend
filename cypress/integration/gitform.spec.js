/// <reference types="cypress" />

it("create a new git listing", () => {
  cy.visit("localhost:3001/CreateGitListing");

  cy.get("#title").type("Post Listing{enter}");
});

it("adds a description", () => {
  cy.visit("localhost:3001/CreateGitListing");

  cy.get("#description").type("Post Listing{enter}");
});

it("completes git listing", () => {
  cy.visit("localhost:3001/CreateGitListing");

  cy.get(".MuiButton-label").click();
});
