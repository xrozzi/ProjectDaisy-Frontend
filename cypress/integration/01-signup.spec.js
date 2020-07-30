it("does a signup", () => {
  cy.visit("localhost:3001/signup");

  cy.get("[type='firstName']").type("UserName");

  cy.get("[type='lastName']").type("User Last Name");

  cy.get("[type='password']").type("adminsecrect");

  cy.get("[type='email']").type("user@user.com");

  cy.get("[type='submit']").click();

  cy.url().should("eq", "http://localhost:3001/CreateGitListing");

  cy.get("[type='hamburger']").click();

  cy.get("#hambugerlogout").click();
});
