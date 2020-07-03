module.exports = {
    auth: async(req, res, next) => {
        if(req.header('token') === "123"){
            next();
        }else{
            res.status(400).json({
                status: false
            })
        }
    }
}