module.exports = (req, res, next) => {

    res.error = (status, message) => {
        res.status(status).json({ message: message });
    }

    res.ok = (content) => {
        if(typeof content == 'string')
            return res.status(200).json({ message: content });

        res.status(200).json({ content });
    }
    
    next();
}