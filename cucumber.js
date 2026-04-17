
module.exports = {
  default: {
    require: [
      "test/e2e/step_definitions/**/*.js",
      "test/e2e/support/**/*.js"
    ],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ],
    publishQuiet: true,
    timeout: 30000 // ✅ 30 segundos por step
  }
};
