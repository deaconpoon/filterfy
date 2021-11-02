/// <reference types="cypress" />

describe("Rendering functionality", async () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Render all components", () => {
    cy.get('[data-testid="title-program"]').should("be.visible");
    cy.get('[data-testid="description-program"]').should("be.visible");
    cy.get('[data-testid="dropdown-program-category"]').should("be.visible");
    cy.get('[data-testid="dropdown-program-type"]').should("be.visible");
    cy.get('[data-testid="dropdown-program-phase"]').should("be.visible");
    cy.get('[data-testid="dropdown-program-tags"]').should("be.visible");
    cy.get('[data-testid="card-program"]').should("be.visible");
    cy.get('[data-testid="card-title-program"]').should("be.visible");
  });
});
