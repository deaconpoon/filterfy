/// <reference types="cypress" />
describe("Interaction functionality", async () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("On click functionality", () => {
    cy.get('[data-testid="card-program"]').eq(1).click();
    cy.get('[data-testid="title-program"]').should(
      "have.text",
      "Mentoring Recruiting Template"
    );
  });
});
