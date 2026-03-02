// const globalErrorHandler = (err, req, res, next)=>{
//     err.statuCode = err.statuCode ||500
//     err.status = err.status || `Error`

//     res.status(err.statuCode).json({
//         statu: err.statu,
//         message:err.message
//     })
// }
// export default globalErrorHandler

/**
 * Global error handling middleware for Express applications.
 *
 * Catches all errors passed via `next(err)` and sends a standardized
 * JSON response to the client.
 *
 * @param {Error} err - The error object
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} res - Express response object
 * @param {import('express').NextFunction} next - Express next middleware function
 */
const globalErrorHandler = (err, req, res, next) => {
    // Set default values if not provided
    err.statusCode = err.statusCode || 500; // default to Internal Server Error
    err.status = err.status || 'error';

    // Send JSON response
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};

export default globalErrorHandler;