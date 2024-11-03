import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import landingPage from "../../pages/landingPage.js";
import loginPage from "../../pages/loginPage.js";
import homePage from "../../pages/homePage.js";
import settingsPage from "../../pages/settingsPage.js";

beforeEach(function () {
  cy.fixture("conduitLoginData").as("data");
});

Given("User is on the login page", function () {
  // cy.visit("https://conduit.bondaracademy.com/");
  // cy.contains("Sign in").click();
  landingPage.navigateTo("https://conduit.bondaracademy.com/");
  landingPage.clickSigninButton();
});

When("User login with valid credentials", function (dataTable) {
  // cy.get('input[placeholder="Email"]').type(dataTable.rawTable[1][0]);
  // cy.get('input[placeholder="Password"]').type(dataTable.rawTable[1][1]);
  // cy.contains("button", "Sign in").click();
  loginPage.enterEmail(this.data.validEmail);
  loginPage.enterPassword(this.data.validPassword);
  loginPage.clickSignin();
});

When("User click on the settings button", function () {
  // cy.get('a[href="/settings"]').click();
  homePage.clickSettings();
});

When("User click on the logout button", function () {
  // cy.contains("button", "Or click here to logout.").click();
  settingsPage.clickLogout();
});

Then("User should be routed back to login page", function () {
  // cy.title() 是用來檢查 html 的 title 標籤，後面接斷言 should()
  cy.title().should("eq", "Conduit | Practice Test Automation");
});
