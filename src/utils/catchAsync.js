// const catchAsync =(fn)=>{
//     return (req, res, next)=>{
//         fn(req, res, next)
//     }
// }
// export default catchAsync

/**
 * Utility function to wrap async route handlers and catch errors.
 *
 * This prevents the need for repetitive try/catch blocks in controllers.
 * Any error thrown in the async function is automatically passed to the
 * global error handler via `next()`.
 *
 * @param {Function} fn - Async route handler function (req, res, next)
 * @returns {Function} Wrapped function that handles errors
 *
 * @example
 * router.get('/users', catchAsync(async (req, res, next) => {
 *    const users = await User.find();
 *    res.status(200).json({ users });
 * }));
 */
const catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next); // Forward any error to global error handler
    };
};

export default catchAsync;