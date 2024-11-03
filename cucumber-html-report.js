const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json",
  reportPath: "cypress/cucumber-html-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  cucumData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Nov 02 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Nov 02 2024, 02:31 PM EST" },
    ],
  },
});
