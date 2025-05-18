import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateAssetCreate = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("category")
    .isIn(["ELECTRONICS", "WATCHES", "COLLECTIBLES"])
    .withMessage("Invalid category"),
  body("purchaseDate")
    .isISO8601()
    .toDate()
    .withMessage("Invalid purchase date"),
  body("value")
    .isFloat({ min: 0 })
    .withMessage("Value must be a positive number"),
  body("brand").trim().notEmpty().withMessage("Brand is required"),
  body("model").trim().notEmpty().withMessage("Model is required"),
  body("serialNumber").optional().trim(),
  body("description").optional().trim(),
  validateRequest,
];

export const validateAssetUpdate = [
  body("name").optional().trim().notEmpty().withMessage("Name cannot be empty"),
  body("category")
    .optional()
    .isIn(["ELECTRONICS", "WATCHES", "COLLECTIBLES"])
    .withMessage("Invalid category"),
  body("purchaseDate")
    .optional()
    .isISO8601()
    .toDate()
    .withMessage("Invalid purchase date"),
  body("value")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Value must be a positive number"),
  body("brand")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Brand cannot be empty"),
  body("model")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Model cannot be empty"),
  body("serialNumber").optional().trim(),
  body("description").optional().trim(),
  validateRequest,
];

function validateRequest(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
