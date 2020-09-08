module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    console.log('not logged');
    return res.json({ logged: false, error: "PermissionError", message: "Error de autentificación" });
}