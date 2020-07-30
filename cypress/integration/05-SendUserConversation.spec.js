/// <reference types="cypress" />

it("Go to admin profile page", () => {
  cy.visit("localhost:3001/users/1");
});

it("Click on the send a title message to user admin", () => {
  cy.get("#msgbutton").click();
});
