/// <reference types="cypress" />

it("adds a new todo item", () => {
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
