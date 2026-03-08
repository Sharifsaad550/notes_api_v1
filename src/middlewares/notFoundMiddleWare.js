import AppError from "../utils/AppError.js"

const notFoundMiddleWare = (req, res, next)=>{
    next(new AppError(`can't find ${req.originalUrl} on our server.`, 404))
}

export default notFoundMiddleWare
//the purpose of this is to ensure the compiler returns data in json format not HTML