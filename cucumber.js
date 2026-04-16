
module.exports = {
  default: {
    require: [
      "features/step_definitions/**/*.js",
      "features/support/**/*.js"
    ],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ],
    publishQuiet: true,
    timeout: 30000 // ✅ 30 segundos por step
  }
};
