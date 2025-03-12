const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? req.session.user : null;
    //anything we need to access in our templates Globally
    //can be added as a property to res.locals
    //res is short for response
    //generating templates is part of the response
    next(); //call the next piece of middleware
}

module.exports = passUserToView;

///this is how to write the same thing as an if/else statement
// if(req.session.user) {
//     res.locals.user = req.session.user { 
//     } else {
//         res.locals.user = null
//     }
// }