// class AppError extends Error{
//     constructor(message, statusCode){
//         super(message)

//         this.statusCode = statusCode
//         this.status = `${statusCode}`.startsWith(`4`) ? `fail` : `Error`

//         this.isOperational = true

//         Error.captureStackTrace(this, this.constructor)
//     }

// }
// export default AppError

/**
 * Custom application error class to standardize error handling.
 *
 * Extends the built-in Error class to include:
 * - HTTP status code
 * - Status string (`fail` for 4xx, `error` for 5xx)
 * - isOperational flag to distinguish expected errors from programming errors
 *
 * @class AppError
 * @extends Error
 */
class AppError extends Error {
    /**
     * Creates an instance of AppError.
     *
     * @param {string} message - Error message to display
     * @param {number} statusCode - HTTP status code
     */
    constructor(message, statusCode) {
        super(message);

        /** @type {number} HTTP status code */
        this.statusCode = statusCode;

        /** @type {string} Status string ('fail' for 4xx, 'error' for 5xx) */
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        /** @type {boolean} Flag indicating operational error */
        this.isOperational = true;

        // Captures the stack trace, excluding constructor call from it
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;