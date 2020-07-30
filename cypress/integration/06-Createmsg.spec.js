/// <reference types="cypress" />

it("check if in inbox", () => {
  cy.visit("localhost:3001/inbox");
});

it("confirms git listing", () => {
  cy.get("[type='messageButton']").click();
});

it("add an email ", () => {
  cy.get("#reciever_id").type("esther@projectdaisy.com.au");
});

it("add title message ", () => {
  cy.get("#title").type("Message about collaboration");
});

it("confirms chat", () => {
  cy.get("#createmessagesend").click();
});

it("check if in inbox", () => {
  cy.visit("localhost:3001/inbox");
});
