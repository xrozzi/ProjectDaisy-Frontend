/// <reference types="cypress" />

it("Go to admin profile page", () => {
  cy.visit("localhost:3001/users/1");
});

it("go to messages", () => {
  cy.get("#msgbutton").click();
});
