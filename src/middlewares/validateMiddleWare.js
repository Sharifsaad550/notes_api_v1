import AppError from '../utils/AppError.js';

/**
 * Validation middleware factory.
 * Intercepts Zod errors and ensures they are perfectly formatted 
 * and user-friendly before sending them to the client.
 */
const validate = (schema, source = 'body') => (req, res, next) => {
    try {
        schema.parse(req[source]);
        next();
    } catch (error) {
        // Ensure we are dealing with a Zod error object
        if (error.issues && error.issues.length > 0) {
            const firstError = error.issues[0];
            
            // Get the name of the field that failed (e.g., 'username', 'email')
            const fieldName = firstError.path.join('.'); 
            
            let cleanMessage = firstError.message;

            // Intercept Zod's technical error for missing fields
            if (firstError.code === 'invalid_type' && firstError.received === 'undefined') {
                // Capitalize the field name for a polished look (e.g., "Username")
                const formattedField = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
                cleanMessage = `${formattedField} is required`;
            }

            return next(new AppError(cleanMessage, 400));
        }

        // Fallback for any unknown validation errors
        next(new AppError("Invalid input data", 400));
    }
};

export default validate;