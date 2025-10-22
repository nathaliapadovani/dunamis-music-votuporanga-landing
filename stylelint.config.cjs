module.exports = {
  extends: [
    "stylelint-config-standard",
  ],
  rules: {
    // Allow Tailwind and PostCSS at-rules
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "config"
        ]
      }
    ]
  }
};
