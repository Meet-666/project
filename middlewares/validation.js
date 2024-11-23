const { body, validationResult } = require("express-validator");

const setTaskStatusValidationRules = [
  body("Status")
    .isIn(["TO_DO", "IN_PROGRESS", "BLOCKED", "IN_REVIEW", "DONE"])
    .withMessage(
      "Invalid task status. Must be one of: TO_DO, IN_PROGRESS, BLOCKED, IN_REVIEW, DONE"
    ),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { setTaskStatusValidationRules, validate };
