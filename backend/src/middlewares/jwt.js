import jwt from 'jsonwebtoken';

export const generateToken = (data) => {
    const tokenData = {
        userId: data.id,
        role: data.role_id
    }

    return jwt.sign(
        tokenData,
        process.env.SECRET_KEY, {
            expiresIn: '1h'
        }
    )
}

export const verifyToken = (token) => {
    if (!token || token === '' || token === null) {
        return false;
    }

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (typeof token !== 'undefined'){
        try{
            if(jwt.verify(token, process.env.SECRET_KEY)) return true;
        } catch(err){
            console.log(err);
        }
    }
    return false;
};

export const decodeToken = (token) => {
    if (!token || token === '' || token === null) {
        return false;
    }

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (typeof token !== 'undefined'){
        try{
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            return decodedToken;
        } catch(err){
            console.log(err);
        }
    }
    return false;
};