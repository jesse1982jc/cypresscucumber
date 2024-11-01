import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("User is on the login page", () => {
  cy.visit("https://conduit.bondaracademy.com/");
  cy.contains("Sign in").click();
});

When("User login with valid credentials", () => {
  cy.get('input[placeholder="Email"]').type("jcjchuhu2@gmail.com");
  cy.get('input[placeholder="Password"]').type("abcd1234");
  cy.contains("button", "Sign in").click();
});

When("User click on the settings button", () => {
  cy.get('a[href="/settings"]').click();
});

When("User click on the logout button", () => {
  cy.contains("button", "Or click here to logout.").click();
});

Then("User should be routed back to login page", () => {
  // cy.title() 是用來檢查 html 的 title 標籤，後面接斷言 should()
  cy.title().should("eq", "Conduit | Practice Test Automation");
});
