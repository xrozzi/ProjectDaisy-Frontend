/// <reference types="cypress" />

it("check url", () => {
  cy.visit("localhost:3001/Gitcollaborations");
});

it("go to a users profile", () => {
  cy.get(".MuiButton-label").first().click();
});
