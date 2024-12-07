function userCredentials(req, res, next) {
    console.log('User Credentials Middleware');
    next();
}

export default userCredentials;