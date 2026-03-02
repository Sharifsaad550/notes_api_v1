// const validate = (schema) => (req, res, next) =>{
//     try {
//         schema.parse(req.body)
//         next()
//     } catch (error) {

//         const errorMessage = error.
//             errors.map(err => `${err.path.
//             join(".")}: ${err.message}`)
//             .join(",")
//         next(new AppError(error.message, 400))
//     }
// }

// export default validate

import AppError from "../utils/AppError.js";

/**
 * Validation Middleware Factory
 *
 * This function generates an Express middleware that validates
 * incoming request data against a provided schema (e.g., Zod schema).
 *
 * Architectural Purpose:
 * -----------------------
 * - Enforces input validation at the routing layer
 * - Prevents invalid data from reaching business logic
 * - Standardizes client error responses (400 Bad Request)
 * - Integrates with global error handling system
 *
 * Execution Flow:
 * ----------------
 * 1. Schema validates req.body
 * 2. If valid → next() is called
 * 3. If invalid → structured error messages are extracted
 * 4. AppError is thrown and passed to global error handler
 *
 * @param {Object} schema - Validation schema (e.g., Zod schema)
 * @returns {Function} Express middleware
 */
const validate = (schema, source = "body") => {
    return (req, res, next) => {
        try {
            // Perform schema validation
            schema.parse(req[source]);

            // Continue to next middleware/controller if validation passes
            next();
        } catch (error) {
            /**
             * Zod provides structured validation errors in error.errors array.
             * Each error object contains:
             * - path: array showing where the error occurred
             * - message: explanation of the validation failure
             */

            const formattedMessage = error.errors
                .map(err => `${err.path.join(".")}: ${err.message}`)
                .join(", ");

            // Forward validation error as operational error
            next(new AppError(formattedMessage, 400));
        }
    };
};

export default validate;