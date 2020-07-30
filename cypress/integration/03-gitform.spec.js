/// <reference types="cypress" />

it("adds a new todo item", () => {
  cy.get("#title").type("Post Listing{enter}");
});

it("adds a description", () => {
  cy.get("#description").type("Post Listing{enter}");
});

it("completes git listing", () => {
  cy.get("#postButton").click();
});

it("confirms git listing", () => {
  cy.get("[type='confirm']").click();
});
