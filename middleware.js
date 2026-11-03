// Custom Middleware

const studentMiddleware = (req, res, next) => {

    console.log("Middleware Executed");
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);

    next(); // Move to next process
};

module.exports = studentMiddleware;