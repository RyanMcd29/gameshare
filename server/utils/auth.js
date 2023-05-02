const jwt = require('jsonwebtoken');

const secret = 'super secret thingy';
const expiration = '2h';



module.exports = {
    // Authorisation middleware to deal with client requests to the server.
    // Request explanation of 'secret' argument at line #23.
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization) {
            token = token.split(' ').pop.trim();
        }

        if(!token) {
            return req;
        }

        try {
            const { data } = jwt.verify(token, secret, {maxAge: expiration});
            req.user = data;
        } catch {
            console.log('invalid token');
        }
        
        return req;
    },

    signToken: function ({ email, username, _id }) {
        const payload = { email, username, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};